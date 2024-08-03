// import React from 'react';
// import Service from './service';

// const Page = ({ params }) => {
//     const slug = params.service;

//     return (
//         <Service slug={slug} />
//     )
// };

// export default Page;

import React from 'react';
import Service from './service';
import { services } from '@/data/services';

const Page = ({ params }) => {
    const slug = params.service;

    return (
        <Service slug={slug} />
    )
};

// Add this function
export async function generateStaticParams() {
    // Assuming 'services' is an object where each key is a service slug
    return Object.keys(services).map(slug => ({
        service: slug
    }));
}

export default Page;