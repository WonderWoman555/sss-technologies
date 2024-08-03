import { Description } from "@/components/Description";
import { Heading } from "@/components/Heading";
import React from "react";
import { Icon } from "@/components/ui"
import { SubHeading } from "../subheading";
import Link from "next/link";

export const Contactcard = () => {
    return (
        <div className="bg-mute p-5 py-6 md:p-6 rounded-3xl">
            <div>
                <SubHeading heading={"h3"}>You still have a questions</SubHeading>
                <Description>
                    Get in touch for any information you are looking for regarding What we do and how we do it?
                </Description>
            </div>
            <div className="flex flex-nowrap gap-3 my-3 bg-white rounded-3xl p-3">
                <Icon.mobileIcon />
                <div className="flex flex-wrap gap-2">
                    <div>Phone:</div>
                    <Link href={'tel:+91-755-4225635'}>+91-755-4225635</Link>
                </div>

            </div>
            <div className="flex flex-nowrap gap-3 my-3 bg-white rounded-3xl p-3">
                <Icon.emailIcon />
                <div className="flex flex-wrap gap-2">
                    <div>Email:</div>
                    <Link href={'mailto:info@ssstechies.com'}>info@ssstechies.com</Link>
                </div>
            </div>
        </div>
    );
};
