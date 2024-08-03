import { Section } from '@/components/Providers'
import React from 'react'
import { CardsArea } from './cards-area'

export const Services = ({ bgMute, subHeading, heading, buttonText, link }) => {
    return (
        <Section bgMute={bgMute} subHeading={subHeading} heading={heading} link={link} buttonText={buttonText}>
            <CardsArea />
        </Section>
    )
}
