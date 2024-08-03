import { Section } from '@/components/Providers'
import React from 'react'
import { CardsArea } from '.'

export const WhyUs = ({ bgMute, subHeading, heading, showWorkShowcase, description = "" }) => {
    return (
        <Section
            bgMute={bgMute}
            subHeading={subHeading}
            heading={heading}
            description={description}
            >
            
            <CardsArea description={description} showWorkShowcase={showWorkShowcase} />
        </Section>
    )
}
