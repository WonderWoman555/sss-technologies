// TeamMemberCard.js
import React from "react";
import Image from "next/image";
import { Icon } from "../ui";
import { SocialLink } from "@/components/social-link";
import { Card, CardContent } from "@/components/ui/card";

const TeamMemberCard = ({ member }) => (
    <div className="p-1">
        <Card className="py-0">
            <CardContent className="flex aspect-square items-center justify-center p-0">
                <MemberImage member={member} />
            </CardContent>
        </Card>
        <MemberInfo member={member} />
    </div>
);

const MemberImage = ({ member }) => (
    <div className="group relative h-96 w-full rounded-xl overflow-hidden cursor-pointer">
        <div className="relative h-full w-full overflow-hidden">
            <Image
                src={member.img}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <SocialLinks />
    </div>
);

const SocialLinks = () => (
    <div className="absolute bottom-0 left-0 w-full p-6 flex justify-around items-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
        {['facebook-f', 'instagram', 'linkedin-in', 'twitter'].map(icon => (
            <SocialLink key={icon} icon={icon} />
        ))}
    </div>
);

const MemberInfo = ({ member }) => (
    <div className="mt-3 flex justify-between items-center">
        <div>
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-gray-500">{member.position}</p>
        </div>
        <Icon.shareIcon className="text-gray-500 hover:text-gray-700 transition-colors" />
    </div>
);

export { TeamMemberCard };