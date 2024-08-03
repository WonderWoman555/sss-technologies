import {
    Card,
    CardContent,
} from "@/components/ui/card";
import { Star } from "../ui/custom/star";
import Image from "next/image";

export const ReviewCard = ({ review }) => {
    return (
        <Card className="m-4 max-h-72 min-h-60 w-full h-full px-3 py-3 bg-mute  rounded-3xl flex flex-col items-center justify-end">
            <CardContent className="flex flex-col gap-4 self-center">
                <Star stars={review.stars} />
                <p className="text-gray-500 text-base">
                    {review.description}
                </p>
                <div className="flex items-center">
                    <Image
                        src={review.image}
                        alt={review.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                    />
                    <div className="ml-3">
                        <h3 className="font-semibold text-xl">{review.name}</h3>
                        <p className="text-gray-400 text-sm">{review.designation}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
