import Image from "next/image";
import WebDevelopmentImg from "@/assets/services/web-development.jpg";
import DigitalMarketingImg from "@/assets/services/digital-marketing.jpg";
import GameDevelopmentImg from "@/assets/services/game-development.jpg";
import MobileAppDevelopmentImg from "@/assets/services/app-development.jpg";
import SoftwareServicesImg from "@/assets/services/software.jpg";
import GraphicsDesignImg from "@/assets/services/design.jpg";

export const services = {
  subheading: "Our Services",
  heading: "What we can offer today",
  button: "View All Services",
};

export const allServices = [
  {
    title: "Web Development",
    description:
      "Crafting stunning, responsive websites that captivate and convert visitors into loyal customers.",
    image: WebDevelopmentImg
  },
  {
    title: "Digital Marketing",
    description:
      "Boosting your online presence with data-driven strategies to reach and engage your target audience.",
    image: DigitalMarketingImg
  },
  {
    title: "Game Development",
    description:
      "Creating immersive gaming experiences that entertain, challenge, and delight players of all ages.",
    image: GameDevelopmentImg
  },
  {
    title: "Mobile App Development",
    description:
      "Building intuitive, feature-rich mobile apps that solve problems and enhance user experiences and strategies to reach your target audience.",
    image: MobileAppDevelopmentImg
  },
  {
    title: "Software Development",
    description:
      "Designing and implementing robust network solutions to keep your business connected and secure.",
    image: SoftwareServicesImg
  },
  {
    title: "Graphics Design",
    description:
      "Bringing your brand to life with eye-catching visuals that communicate your unique identity.",
    image: GraphicsDesignImg
  },
];