import { Section } from '@/components/Providers'
import React from 'react'
import { AllBlogs } from '.'

export const Blog = ({ bgMute, subHeading, heading, link }) => {
    return (
        <Section bgMute={bgMute} subHeading={subHeading} heading={heading} link={link}>
            <div className=""></div>
            <AllBlogs/>
        </Section>
    )
}
