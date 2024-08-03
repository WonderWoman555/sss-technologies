import { AccordionFaqs } from "@/components/Accordion";
import { Relatedservices, WhyUs, Yourchoice, FAQs } from "@/components/Sections";
import { Servicefeature } from "@/components/pages/services";

export const serviceSection = [
    {
        name: "Hero",
        Comp: Servicefeature,
        subHeading: "About Our Company",
        heading: "Web Design, SEO & Internet Marketing For Your Business",
        description: "At SSS Techies, we specialize in creating innovative web designs and effective digital marketing strategies to elevate your business's online presence. Our expert team combines creativity with technical expertise to deliver results-driven solutions."
    },

    {
        name: "Why us",
        Comp: WhyUs,
        subHeading: "Why Choose Us",
        heading: "Why SSS Techies",
        showWorkShowCase: false,
        description: true,
        description: "SSS Techies stands out for its commitment to excellence and client satisfaction. We offer personalized services that cater to your unique needs, ensuring that every project is executed with precision and creativity. Our team leverages the latest technologies to provide cutting-edge solutions that drive success."
    },

    {
        name: "Your choice",
        Comp: Yourchoice,
        subHeading: "Your Choice",
        heading: "Tailored Solutions for Your Business",
        description: "We offer customized web design and digital marketing services that align with your business objectives. Whether you need a stunning website, robust SEO, or comprehensive marketing strategies, we provide solutions that are tailored to your specific needs."
    },

    {
        name: "Related Services",
        Comp: Relatedservices,
        subHeading: "Explore Our Related Services",
        heading: "Discover Additional Solutions",
        description: "Explore our range of services designed to complement and enhance your primary offerings. From advanced web development to targeted digital marketing campaigns, we provide a comprehensive suite of solutions to help your business thrive."
    },

    {
        name: "FAQs",
        Comp: FAQs,
        subHeading: "Frequently Asked Questions",
        heading: "Answers to Your Questions",
        description: "Find answers to common questions about our services, processes, and how we can help you achieve your business goals. Our FAQs section provides valuable insights to assist you in making informed decisions."
    },
]
