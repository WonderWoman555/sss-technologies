"use client";
import { Section } from "@/components/Providers/section-wrapper.jsx";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TeamMemberCard } from "@/components/Cards";

const TeamCarousel = ({ teams }) => (
  <Carousel opts={{ align: "center" }} className="w-full py-0 ">
    <CarouselContent>
      {teams.map((item, index) => (
        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 basis-full">
          <TeamMemberCard member={item} />
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);

export const Teams = ({ bgMute, heading, subHeading, teamsFinal }) => {
  return (
    <Section bgMute={bgMute} heading={heading} subHeading={subHeading}>
      <TeamCarousel teams={teamsFinal} />
    </Section>
  );
};