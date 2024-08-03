'use client'
import React, { useMemo } from "react";
import { ProjectCard } from "@/components/Cards";
import { portfolioData } from "@/data";
import { usePathname } from "next/navigation";

export const WorkCards = ({ className, data }) => {
  const pathname = usePathname();

  const finalData = useMemo(() => {
    const sourceData = data || portfolioData;
    if (pathname.includes("portfolio")) {
      return sourceData;
    } else {
      const flattenedProjects = sourceData.flatMap(item => item.projects);
      return flattenedProjects.slice(0, 4).map(project => ({ projects: [project] }));
    }
  }, [data, pathname]);

  return (
    <div className={`${className} w-full h-full `}>
      <ul className="w-full h-full grid 2xl:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-5">
        {finalData.map((item, i) =>
          item.projects.map((project, j) => (
            <li key={`${i}-${j}`} className="">
              <ProjectCard
                title={project.title}
                desc={project.description}
                imgSrc={project.imgSrc}
              />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};