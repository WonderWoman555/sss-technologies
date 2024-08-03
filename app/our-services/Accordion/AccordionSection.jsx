import { Heading } from "../../../components/Heading";
import { Contact } from "./Contact";
import React from "react";
import { Accordion } from "./Accordion";

export const AccordionSection = () => {
  return (
    <section>
      <div className="lg:p-16 md:p-4 p-2 lg:mx-16 md:mx-4 mx-2 mt-5">
        <div className="">
          <Heading heading={"h6"}>FAQ&apos;s</Heading>
          <Heading heading={"h1"}>Frequently asked question</Heading>
        </div>
        <div className="flex flex-wrap mt-7">
          <div className="mb-5">
            <Accordion />
          </div>
          <div className="w-full lg:w-[34.5%]" >
            <Contact />
          </div>
        </div>
      </div>
    </section>
  );
};
