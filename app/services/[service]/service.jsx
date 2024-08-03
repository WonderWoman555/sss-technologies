import React from 'react';
import { services } from '@/data/services';
import { findObjectBySlug } from '@/utils/helper';
import { notFound } from 'next/navigation';
import { serviceSection } from '@/data';
import Wrapper from '@/components/wrapper/wrapper';

const Service = ({ slug }) => {
    const service = findObjectBySlug(services, slug);

    if (!service) {
        console.error(`Service with slug "${slug}" not found.`);
        return notFound();
    }

    return (
        <>
            <Wrapper>
                {serviceSection?.map((Service, i) => (
                    <Service.Comp
                        key={i}
                        faqs={service.faqs}
                        heading={Service.heading}
                        bgMute={i % 2 !== 0}
                        service={service}
                        showWorkShowcase={Service.showWorkShowCase}
                        subHeading={Service.subHeading}
                        description={Service.description}
                        excludeContact={false}
                    />
                ))}
            </Wrapper>
        </>
    );
};

export default Service;