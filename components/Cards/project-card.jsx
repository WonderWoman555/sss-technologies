import React from "react";
import Image from "next/image";
import WorkImg1 from "@/assets/works-img-1.jpg";
import styless from "./largecards.module.css";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Description } from "../Description";

export const ProjectCard = ({ title, desc, imgSrc, tags, key }) => {
  return (
    <Card className="w-full h-full border-none shadow-none bg-gray-50 rounded-3xl lg:px-2 ">
      <CardHeader className="px-4">
        <div
          className={`${styless.btn1} w-full lg:h-72 h-60  flex items-center justify-center bg-white rounded-3xl`}

        >
          <Image
            src={imgSrc}
            width={1000}
            height={1000}
            alt="work-img-1"
            className="mx-auto mt-0  w-full h-full  rounded-3xl"
          />
        </div>
      </CardHeader>
      <CardContent className="px-4">
        <div className="flex flex-col gap-4 px-2">
          <CardTitle className="sm:text-2xl text-xl font-semibold duration-300 transition-all cursor-pointer">{title}</CardTitle>
          <Description >{desc}</Description>
        </div>
      </CardContent>
    </Card>
  );
};
