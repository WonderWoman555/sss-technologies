import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heading } from "../Heading";
import { Description } from "../Description";
import { SubHeading } from "../subheading/SubHeading";

export const WhyUsCard = ({ Icon, heading, description }) => {
  return (
    <Card className="w-full border-none shadow-none rounded-3xl flex flex-col gap-2 pt-7 px-2 col-auto">
      <CardHeader className="py-0">
        {Icon}
      </CardHeader>
      <CardContent className="py-0">
        <SubHeading heading={"h3"}>
          {heading}
        </SubHeading>
      </CardContent>
      <CardFooter className="">
        <Description>
          {description}
        </Description>
      </CardFooter>
    </Card>
  );
};
