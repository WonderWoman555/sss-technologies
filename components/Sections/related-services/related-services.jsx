import { Section } from '@/components/Providers'
import { ServiceCarousel } from '@/components/swiper'
import React from 'react'

export const Relatedservices = ({ bgMute, heading, subHeading }) => {
    return (
        <Section bgMute={bgMute} heading={heading} subHeading={subHeading}>
            <ServiceCarousel />
        </Section>
    )
}
