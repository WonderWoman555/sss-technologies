'use server'

import db from '@/db'

export async function submitContactForm(data) {
    try {
        console.log(data.fullName)
        // Create a new lead in the database
        const newLead = await db.leads.create({
            data: {
                fullName: data.fullName,
                email: data.email,
                budget: data.budget,
                leadSource: data.leadSource,
                message: data.message,
                phoneNumber: data.phoneNumber || '', // Assuming you'll add this field to your form
            },
        })

        console.log('New lead created:', newLead)
        return { message: `Thank you, ${data.fullName.firstLetterCapital()}! 🎉 Your message has been received with a smile. We're excited to connect with you and will be in touch soon. Have a wonderful day!` }
    } catch (error) {
        console.error(error)
        return { message: "Error submitting application", error: true }
    }
}