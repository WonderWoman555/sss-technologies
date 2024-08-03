import { Section } from '@/components/Providers'
import React from 'react'
import { WorkCards } from '.'
import { portfolioData } from '@/data'

export const Work = ({ bgMute, subHeading, heading, link, portfolio }) => {
    return (
        <Section bgMute={bgMute} subHeading={subHeading} heading={heading} link={link}>
            <WorkCards data={portfolio} />
        </Section>
    )
}
