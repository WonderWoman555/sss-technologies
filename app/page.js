import { homePageSections } from "@/data/sections";
import { nanoid } from "nanoid";

export default function Home() {
  return (
    <main className="flex flex-col gap-3 h-auto">
      {homePageSections?.map((Home, i) => (
        <Home.Comp
          bgMute={i % 2 === 0 ? true : false}
          key={nanoid()}
          subHeading={Home.subHeading}
          heading={Home.heading}
          link={Home.link}
          additionalBox={Home.additionalBox}
          portfolio={Home.portfolio}
          teamsFinal={Home.teamsFinal}
        />
      ))}
    </main>
  );
}
