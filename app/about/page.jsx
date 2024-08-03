import React from "react";
import Wrapper from "@/components/wrapper/wrapper";
import { aboutSections } from "@/data/sections/about";

const page = () => {
  return (
    <Wrapper >
      {aboutSections?.map((About, i) => (
        <About.Comp
          key={i}
          additionalBox={About.additionalBox}
          bgMute={i % 2 !== 0}
          heading={About.heading}
          subHeading={About.subHeading}
          marquee={About.marquee}
          stats={About.stats}
          teamsFinal={About.teamsFinal}
        />
      ))}
    </Wrapper>
  );
};

export default page;
