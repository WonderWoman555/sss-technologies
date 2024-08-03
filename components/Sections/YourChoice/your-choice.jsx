import React from "react";
import { Section } from "@/components/Providers";
import { CardsArea } from '.'

export const Yourchoice = ({ bgMute, subHeading, heading }) => {

    return (
        <Section bgMute={false} heading={heading} subHeading={subHeading}>
            <CardsArea/>
        </Section>
    );
};
