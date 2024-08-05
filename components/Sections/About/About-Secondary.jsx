'use client'
import { AboutCounter } from "./about-counter";
import { Heading } from "@/components/Heading";
import { Section } from "@/components/Providers/section-wrapper";
import { SubHeading } from "@/components/subheading";
import { AboutContent } from ".";

export const AboutSecondary = ({ link, additionalBox }) => {

    return (
        <Section
            bgMute={false}
            link={link}
        >
            <div className="">
                <div className="flex lg:flex-row xl:gap-28 lg:gap-28 2xl:px-0 lg:px-5 flex-col sm:items-center sm:justify-center ">
                    <div className="lg:w-11/12 sm:w-9/12 w-full rounded-xl lg:h-[75vh] sm:h-[75vh] h-[75vh] items-center flex justify-center bg-about bg-cover bg-no-repeat relative ">
                        <div className="absolute left-0 top-0 h-full w-full">

                            <div className="">{additionalBox ? <AboutCounter
                                className={' w-7/12 sm:w-5/12 2xl:w-6/12 xl:w-7/12 lg:w-7/12 sm:py-6 py-2 absolute -top-8 sm:-top-8 lg:-top-16 xl:-top-11 left-1/2 -translate-x-1/2 sm:left-20 lg:left-20 xl:left-26'} /> : ""}</div>
                        </div>
                    </div>

                    <div className="h-full w-full flex flex-col gap-5 justify-between pt-9 md:pt-5  text-center md:text-start">
                        <div className="">
                            <SubHeading className="text-xl font-semibold text-primary-light">About us</SubHeading>
                            <Heading className="" heading={'h1'}>Websites that tell your brand&apos;s story</Heading>
                        </div>

                        <div className="w-full h-full ">
                            {/* <Content /> */}
                            <AboutContent readMore={false}/>
                        </div>


                        {/* <div className="w-full h-32 bg-gray-100 rounded-2xl flex justify-center items-center">
                            <span>Karishma TODO</span>
                        </div> */}
                    </div>
                </div>
            </div>
        </Section>
    );
};
