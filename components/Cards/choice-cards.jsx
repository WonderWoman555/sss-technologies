import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Listbullet } from '@/components/Listbullet'
import { Description } from '../Description'

export const Choicecards = ({ item }) => {
    return (
        <Card className="bg-mute lg:max-w-96 lg:min-w-96 w-full">
            <CardHeader>
                <div className="flex justify-between gap-10 items-center pb-2 border-b-2 border-gray-300">
                    <div className="text-xl font-semibold">{item.title}</div>
                    <item.Icon />
                </div>
            </CardHeader>
            <CardContent>
                <div className='flex flex-col gap-4'>
                    {item.points.map((point, idx) => (
                        <Description key={idx} className="text-md">{point}</Description>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
