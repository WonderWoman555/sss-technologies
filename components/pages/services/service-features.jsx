import Image from "next/image";
import React from "react";
import ImgSrc from "@/assets/service-feature-img.jpg";
import { Description } from "@/components/Description";
import { Featurescard } from "@/components/Cards";
// import Features from "./Features";

const Servicefeature = ({ service }) => {
    return (
        <section className="lg:p-16 md:p-4 p-2 lg:mx-16 md:mx-4 mx-2 mt-5 ">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="lg:w-2/3 w-full mb-5 lg:mb-0 ">
                    <Image
                        src={ImgSrc}
                        className="rounded-xl md:rounded-3xl mb-10"
                        alt="Service Feature Image"
                        layout="responsive"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <Description>
                        {service.description}
                    </Description>
                    <br />
                    <Description>
                        {service.secondaryDescription}
                    </Description>
                </div>
                <div className="lg:w-96 w-full">
                    <Featurescard title={service.title} tags={service.tags} />
                </div>
            </div>
        </section>
    );
};

export { Servicefeature };