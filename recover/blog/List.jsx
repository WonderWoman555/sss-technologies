import React from "react";
// import { Icon } from "@/components/ui";
import { Listbullet } from "@/components/Listbullet/Listbullet";

const List = () => {
  const listData = [
    "Quantum computing represents a paradigm shift in computational power.",
    "The potential to solve complex problems that are currently beyond.",
    "Quantum computing holds promise for applications in cryptography.",
    "The IoT ecosystem continues to expand, connecting an ever-growing number.",
    "VR and AR technologies are blurring the lines between the physical and digital world.",
  ];
  return (
    <>
      <div>
        {listData.map((item, index) => (
          <div className="font-bold lg:text-lg" key={index}>
            <Listbullet> {item}</Listbullet>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
