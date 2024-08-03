"use client";
import { WorkCards } from "@/components/Sections/Work/cards-area";
import { Tag } from "@/components/Sections/Tag";
import { portfolioData } from "@/data";
import React, { useState, useMemo } from "react";

export const Portfolio = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleFilterCards = (tag) => {
    setSelectedTags((prev) => {
      if (prev.includes(tag)) {
        return prev.filter((_) => _ !== tag);
      } else {
        return [...prev, tag];
      }
    });
  };

  const handleSetAllData = () => {
    setSelectedTags([]);
  };

  const filteredData = useMemo(() => {
    if (selectedTags.length === 0) return portfolioData;
    return portfolioData.filter((item) =>
      selectedTags.every(tag => item.tags.includes(tag))
    );
  }, [selectedTags]);

  const uniqueTags = useMemo(() =>
    Array.from(new Set(portfolioData.flatMap(data => data.tags))),
    []
  );

  return (
    <div className="w-full sm:px-10 py-10 lg:px-10">
      <ul className="flex flex-wrap items-center justify-center gap-5 my-10">
        <li onClick={handleSetAllData}>
          <Tag className={selectedTags.length === 0 ? "bg-primary text-white" : ""}>All</Tag>
        </li>
        {uniqueTags.map((tag) => (
          <li key={tag} onClick={() => handleFilterCards(tag)}>
            <Tag
              className={selectedTags.includes(tag) ? "bg-primary text-white" : ""}
            >
              {tag}
            </Tag>
          </li>
        ))}
      </ul>

      <div className="py-10 px-4 sm:px-6 lg:px-10 sm:w-full">
        <WorkCards className={""} data={filteredData} />
      </div>
    </div>
  );
};