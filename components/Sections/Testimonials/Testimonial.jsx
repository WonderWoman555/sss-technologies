'use client'
import { Section } from '@/components/Providers'
import { ReviewCarousel } from '../../../components/swiper/Review-carousel'
import React from 'react'

export const Testimonial = ({ bgMute, subHeading, heading }) => {
    return (
        <Section bgMute={bgMute} subHeading={subHeading} heading={heading}>
            <div className="-ml-11">
                <ReviewCarousel/>
            </div>
        </Section>
    )
}
