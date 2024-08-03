
import React, { Suspense } from 'react'
import CareerWrapper from '@/components/Providers/career-wrapper'
import { JobsTable } from '@/components/Sections/career/jobs-table'
import { JobApplicationForm } from '@/components/forms/career-form'
import { Tag } from '@/components/ui/custom/tag/tag'
import { getAllOpenedPositions } from '@/actions/jobs-actions'
import { ErrorBoundary } from 'react-error-boundary'

const JobsDataProvider = async ({ children }) => {
    const jobs = await getAllOpenedPositions();
    return children({ jobs: jobs.data });
}

const JobsContent = ({ jobs }) => {
    return (
        <>
            <Tag>Our Job Openings</Tag>
            <JobsTable jobs={jobs} />
            <Tag>Apply for a position</Tag>
            <JobApplicationForm jobs={jobs} className={'w-full'} />
        </>
    )
}

export const Career = async () => {
    return (

        <CareerWrapper className="flex flex-col gap-10">
            <ErrorBoundary fallback={<div>Something went wrong ...</div>}>
                <Suspense fallback={<div>Loading job openings...</div>}>
                    <JobsDataProvider>
                        {({ jobs }) => <JobsContent jobs={jobs} />}
                    </JobsDataProvider>
                </Suspense>
            </ErrorBoundary>
        </CareerWrapper>
    )
}

// 'use client';
// import React, { useEffect, useState } from 'react';
// import CareerWrapper from '@/components/Providers/career-wrapper';
// import { JobsTable } from '@/components/Sections/career/jobs-table';
// import { JobApplicationForm } from '@/components/forms/career-form';
// import { Tag } from '@/components/ui/custom/tag/tag';
// import { getAllOpenedPositions } from '@/actions/jobs-actions';

// const JobsContent = ({ jobs }) => {
//     return (
//         <>
//             <Tag>Our Job Openings</Tag>
//             <JobsTable jobs={jobs} />
//             <Tag>Apply for a position</Tag>
//             <JobApplicationForm jobs={jobs} className={'w-full'} />
//         </>
//     );
// };

// const Career = () => {
//     const [jobs, setJobs] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchJobs = async () => {
//             try {
//                 const jobsData = await getAllOpenedPositions();
//                 setJobs(jobsData.data);
//             } catch (error) {
//                 console.error('Failed to fetch job openings:', error);
//             } finally {
//                 setLoading(false);
//             }
//         }

//         fetchJobs()
//     }, []);

//     if (loading) {
//         return <div>Loading job openings...</div>;
//     }

//     return (
//         <CareerWrapper className="flex flex-col gap-10">
//             {jobs ? <JobsContent jobs={jobs} /> : <div>No job openings available.</div>}
//         </CareerWrapper>
//     );
// };

// export default Career;
