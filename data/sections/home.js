import { Hero, Services, About, Partners, WhyUs, Work, Teams } from "@/components/Sections";
// import {Team} from '@/components/Sections/teams/team'
import { portfolioData } from "@/data/portfolio-data";
import { teamsinfo } from "../teams";

export const homePageSections = [
    {
        name: "Hero",
        Comp: Hero,
        subHeading: "Welcome to SSS",
        heading: "Web Design, SEO & Internet Marketing For Your Business"
    },
    {
        name: "About",
        Comp: About,
        subHeading: "About Company",
        heading: "Websites that tell your brand's story"
    },
    {
        name: "Services",
        Comp: Services,
        subHeading: "Our Services",
        heading: "What we can offer today",
        link: "View all Services"
    },
    {
        name: "Work",
        Comp: Work,
        subHeading: "Our Works",
        heading: "Concepts to completion",
        link: "All Portfolio",
        additionalBox: true,
        portfolio: portfolioData
    },
    {
        name: "How it works",
        Comp: WhyUs,
        subHeading: "How it works",
        heading: "From Concept to Reality: Our Process"
    },
    {
        name: "Partners",
        Comp: Partners,
        subHeading: "Executive Partners",
        heading: "100+ Partners & supporters"
    },
    {
        name: "Teams",
        Comp: Teams,
        subHeading: "Meet out team",
        heading: "Our Coding Ninja's",
        link: "View All Articles",
        teamsFinal: teamsinfo
    }
];
