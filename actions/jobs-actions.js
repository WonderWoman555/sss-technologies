"use server"

import { google } from 'googleapis';
import { authenticate } from '@google-cloud/local-auth';
import path from 'path';
import { revalidatePath } from 'next/cache'; // Assuming you're using Next.js 13+
import prisma from '@/db';

export async function getAllJobs() {
    const data = await prisma.job.findMany();
    return { message: "Successfully fetched!", error: false, data };
}

export async function getAllOpenedPositions() {
    try {
        const data = await prisma.job.findMany({ where: { isOpen: true } });
        return { message: "Successfully fetched!", error: false, data };
    } catch (error) {
        console.error("Error fetching open positions:", error);
        return { message: "Failed to fetch open positions", error: true, data: null };
    }
}

export async function submitResumeToCloud() {

}

export async function submitJobApplication(formData) {
    try {
        const jobId = formData.get('jobId');

        const data = {
            fullName: formData.get('fullName'),
            email: formData.get('email'),
            contactNumber: formData.get('contactNumber'),
            experience: parseInt(formData.get('experience')),
            address: formData.get('address'),
            employmentStatus: formData.get('employmentStatus'),
            job: {
                connect: { id: jobId }
            }
        };

        const jobApplication = await prisma.jobApplication.create({ data });

        const resumeFile = formData.get('resumeFile');
        if (resumeFile && resumeFile.size > 0) {
            const auth = await authenticate({
                keyfilePath: path.join(process.cwd(), 'credentials.json'),
                scopes: ['https://www.googleapis.com/auth/drive.file'],
            });

            const drive = google.drive({ version: 'v3', auth });

            const fileMetadata = {
                name: `${data.fullName}_Resume.pdf`,
                parents: ['YOUR_GOOGLE_DRIVE_FOLDER_ID']
            };

            const media = {
                mimeType: resumeFile.type,
                body: resumeFile.stream()
            };

            const driveResponse = await drive.files.create({
                resource: fileMetadata,
                media: media,
                fields: 'id, webViewLink'
            });

            // Update the job application with the file URL
            await prisma.jobApplication.update({
                where: { id: jobApplication.id },
                data: {
                    resumeUrl: driveResponse.data.webViewLink
                }
            });
        }

        revalidatePath('/careers')
        return { message: "Application submitted successfully!", error: false }
    } catch (error) {
        console.error(error)
        return { message: "Error submitting application", error: true }
    }
}