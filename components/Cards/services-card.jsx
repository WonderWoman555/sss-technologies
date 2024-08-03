import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Arrow } from "@/components/ui/custom";
import { Description } from "../Description";
import Image from "next/image";

export const ServicesCard = ({ title, description, image }) => {
  return (
    <Card className="w-full h-auto border-0 shadow-none rounded-3xl ">
      <CardHeader>
        <div className="flex w-full items-center justify-between gap-5 border-b pb-3">
          <CardTitle className="text-2xl">{title}</CardTitle>
          <Arrow />
        </div>
      </CardHeader>
      <CardContent className="">
        <Description>
          {description}
        </Description>
      </CardContent>
      <CardFooter className="">
          <Image
            className="w-full h-40 bg-gray-100 rounded-3xl flex items-center justify-center"
            src={image}
          ></Image>
      </CardFooter>
    </Card>
  );
};
