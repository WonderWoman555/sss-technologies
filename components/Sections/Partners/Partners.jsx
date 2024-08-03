import { Section } from '@/components/Providers'
import React from 'react'
import { CardsArea } from '.'

export const Partners = ({ bgMute, subHeading, heading }) => {
    return (
        <Section bgMute={bgMute} subHeading={subHeading} heading={heading}>
            <CardsArea />
        </Section>
    )
}
