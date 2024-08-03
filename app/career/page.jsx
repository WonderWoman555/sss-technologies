// import React from 'react';
// import CareerWrapper from '@/components/Providers/career-wrapper';
// import { JobsTable } from '@/components/Sections/career/jobs-table';
// import { JobApplicationForm } from '@/components/forms/career-form';
// import { Tag } from '@/components/ui/custom/tag/tag';
// import { getAllOpenedPositions } from '@/actions/jobs-actions';
// import { ErrorBoundary } from 'react-error-boundary';

// const CareerPage = async () => {
//     const jobs = await getAllOpenedPositions();

//     if (jobs.error) {
//         throw new Error(jobs.message);
//     }

//     return (
//         <CareerWrapper className="flex flex-col gap-10">
//             <ErrorBoundary fallback={<div>Something went wrong ...</div>}>
//                 <Tag>Our Job Openings</Tag>
//                 <JobsTable jobs={jobs.data} />
//                 <Tag>Apply for a position</Tag>
//                 <JobApplicationForm jobs={jobs.data} className={'w-full'} />
//             </ErrorBoundary>
//         </CareerWrapper>
//     );
// };

// export default CareerPage;

import React from "react";

const page = () => {
  return <div></div>;
};

export default page;
