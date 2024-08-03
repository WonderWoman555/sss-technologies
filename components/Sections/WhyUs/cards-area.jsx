import { WhyUsCard, WorkShowCaseCard } from "@/components/Cards";
import { Description } from "@/components/Description";
import { aboutWhyCard } from "@/data/aboutWhyCard";
import { Globe } from "lucide-react";
import React from "react";

const links = [
  { title: "Portfolio", href: "/portfolio" },
  { title: "Linkedin", href: "https://www.linkedin.com/company/13442809/" },
  { title: "Contact Us", href: "/contact" },
];

export const CardsArea = ({ showWorkShowcase = true, showDescription=false }) => {
  return (
    <div className="w-full h-full">
      <ul className="w-full h-full grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {aboutWhyCard.map((item, i) => (
          <WhyUsCard
            key={i}
            heading={item.heading}
            description={item.description}
            Icon={item.Icon}
          />
        ))}

        {showWorkShowcase && <WorkShowCaseCard
          className={"col-span-full "}
          Icon={Globe}
          heading={"Quality check and launch - explore our work"}
          description={
            "A well developed product is one, which satisfies all the conditions and deliver the services it is expected to, while following set standards. This last phase is a vital phase of a project cycle as it, not only has the excitement of a product launch attached to it but also a sense of responsibility, that the verdict/ outcome is better than expected."
          }
          links={links}
        />}
      </ul>
    </div>
  );
};
