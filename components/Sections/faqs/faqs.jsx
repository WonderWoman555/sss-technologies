import { AccordionFaqs } from '@/components/Accordion'
import { Contactcard } from '@/components/Cards'
import { Section } from '@/components/Providers'
import React from 'react'

export const FAQs = ({ excludeContact = true, faqs, bgMute, subHeading, heading, link }) => {
    return (
        <Section bgMute={bgMute} heading={heading} subHeading={subHeading}>
            <div className="flex lg:flex-row flex-col gap-6 mt-7 justify-between w-full">
                <div className="mb-5 lg:w-full w-full">
                    <AccordionFaqs faqs={faqs} />
                </div>
                {!excludeContact && <div className="lg:w-6/12" >
                    <Contactcard />
                </div>}
            </div>
        </Section>
    )
}