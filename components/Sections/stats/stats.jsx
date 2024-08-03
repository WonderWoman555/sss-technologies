import { Section } from '@/components/Providers'
import React from 'react'
import { CardsArea } from '.'

export const Stats = ({ stats, bgMute, heading, subHeading }) => {
    return (
        <Section bgMute={bgMute} heading={heading} subHeading={subHeading}>
            <CardsArea stats={stats} />
        </Section>
    )
}
