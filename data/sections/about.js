import { AboutSecondary } from "@/components/Sections/About/About-Secondary";
import { Partners } from "@/components/Sections/Partners/Partners";
import { WhyUs } from "@/components/Sections/WhyUs/why-us";
import { Stats } from "@/components/Sections/stats/stats";
import { Marquee } from "@/components/marquee";
import { marquee } from "@/data/marque";
import { statsItem } from "../stats";
import { teamsinfo } from "../teams";
import { Teams } from "@/components/Sections/teams/team";
import { Testimonial } from "@/components/Sections/Testimonials/Testimonial";

export const aboutSections = [
    {
        name: "Hero",
        Comp: AboutSecondary,
        subHeading: "About Our Company",
        heading: "Web Design, SEO & Internet Marketing For Your Business",
        additionalBox: true
    },

    {
        name: "Hero",
        Comp: WhyUs,
        subHeading: "Why choose us ?",
        heading: "Why Choose us"
    },

    {
        name: "Hero",
        Comp: Partners,
        subHeading: "Ourview Comapny",
        heading: "Stats that matter"
    },

    {
        name: "Hero",
        Comp: Stats,
        subHeading: "Ourview Comapny",
        heading: "Stats that matter",
        stats: statsItem
    },

    {
        name: "Teams",
        Comp: Teams,
        subHeading: "Meet our team",
        heading: "Our Coding Ninja's",
        teamsFinal: teamsinfo
    },

    {
        name: "Marquee",
        Comp: Marquee,
        marquee: marquee
    },

    {
        name: "Review",
        Comp: Testimonial,
        subHeading: "Client Testimonials",
        heading: "Our customers love us."
    }
]