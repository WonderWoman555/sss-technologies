import { Heading } from "@/components/Heading";
import { Container } from "@/components/Providers";
import { SubHeading } from "@/components/subheading";
import { Icon } from "@/components/ui";
import { CustomButton } from "@/components/ui/custom/Button/custom-button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Hero = ({ bgMute, subHeading, heading }) => {
  return (
    <Container>
      <div className="w-full h-full flex flex-col 2xl:py-36 xl:py-20 lg:py-16 sm:py-10 py-3">
        <div className="flex lg:flex-row flex-col lg:gap-10 gap-14 justify-between">
          <div className="w-full">
            <Heading style="my-3">{subHeading}</Heading>
            <div className="flex flex-col lg:gap-6 gap-6 w-11/12 ">
              <h1 className="2xl:text-7xl lg:text-6xl sm:text-4xl text-3xl font-semibold ">
                {heading}
              </h1>
              <p className="lg:w-10/12 sm:w-full  opacity-55">
                We are a bunch of IT-fanatics with a sole mission of IT invasion over the world. We aim in simplifying IT for one and all, From an Entrepreneur to a massive organization. Established in 2017.
              </p>

              <Link href={'/contact'}>
                <CustomButton className={"sm:w-4/12 w-9/12"}>
                  Free Consultation
                </CustomButton>
              </Link>
            </div>
          </div>
          <div className="lg:w-6/12  flex items-center justify-center relative">
            <div className="w-24 h-24 absolute lg:top-1/2 top-0 -translate-1/2 -translate-y-1/2 lg:-left-12 rounded-full flex items-center justify-center border-[7px] border-white bg-primary z-30">
              <Icon.PlayIcon className="text-white w-32 h-32" />
            </div>
            <div className="btn1">
              <Image
                src={
                  "https://demo.awaikenthemes.com/html-preview/weebix/images/hero-img.jpg"
                }
                width={5000}
                height={5000}
                alt={"hero Image"}
                className="rounded-3xl w-full "
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
