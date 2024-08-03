import { AboutContent, AboutCounter, AboutImg } from ".";
import { Section } from "@/components/Providers/section-wrapper";
import { Button } from "@/components/ui/button";
import { CustomButton } from "@/components/ui/custom/Button/custom-button";
import Image from "next/image";
import Link from "next/link";

export const About = ({ bgMute, subHeading, heading, link, additionalBox }) => {

  return (
    <Section
      bgMute={false}
      subHeading={subHeading}
      heading={heading}
      link={link}
    >
      <div className=" flex gap-52">

        <div className="flex lg:flex-row gap-10 flex-col">
          <div className="w-full rounded-xl lg:h-auto  items-center flex justify-center bg-about bg-cover bg-no-repeat relative">
            <div className="absolute left-0 top-0 h-full w-full">
              <div className="">{additionalBox ? <AboutCounter /> : ""}</div>
              <div className="-translate-x-1/2 absolute  -bottom-24 -right-60 !z-[9999999]">
                {additionalBox ? <AboutImg /> : ""}
              </div>
            </div>
          </div>

          <div className="h-full w-full ">
            <div className="w-full h-full  space-y-6 ">
              <AboutContent />
              <Link href={'/contact'}>
                <CustomButton className="w-full mt-7 lg:w-2/5 sm:w-2/5">Free consulation</CustomButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
