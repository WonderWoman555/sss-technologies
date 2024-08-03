import React from "react";
import { Heading } from "@/components/Heading";
// import { features } from "./data";
import { CustomButton } from "@/components/ui/custom";
import { Description } from "@/components/Description";
import { Listbullet } from "@/components/Listbullet/Listbullet";
import { Icon } from "@/components/ui"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
// import { SubHeading } from "@/components/Subheading/SubHeading";

const Featurescard = ({ title, tags }) => {
    return (
        <Card className="bg-mute">
            <CardHeader className="pb-2">
                <Icon.settingIcon />
                <CardTitle className="text-2xl font-semibold">{title || "No Heading"}</CardTitle>
            </CardHeader>
            <CardContent className="">
                {/* <ul className="flex flex-col"> */}
                {tags.map((tag, index) => (
                    <Listbullet key={index}>
                        <CardDescription className="text-gray-500">
                            {tag.title}
                        </CardDescription>

                    </Listbullet>
                ))}
                {/* </ul> */}
            </CardContent>
            <CardFooter>
                <CustomButton className="w-full flex justify-between sm:w-2/5 lg:w-full">Contact Now</CustomButton>
            </CardFooter>
        </Card>
    );
};

export { Featurescard };
