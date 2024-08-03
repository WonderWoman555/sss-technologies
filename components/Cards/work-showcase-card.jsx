import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Heading } from '../Heading'
import { Description } from '../Description'
import { Button } from '../ui/button'
import Link from 'next/link'


export const WorkShowCaseCard = ({ Icon, heading, description, links, className }) => {
    return (
        <Card className={`${className} w-full sm:px-10 sm:py-12 px-3 py-3 flex flex-col lg:gap-2  rounded-3xl`}>
            <CardHeader className="">
                <div className="flex w-full justify-between items-start">
                    <Heading heading={'h1'} style={'text-start'} >{heading}</Heading>
                    <Icon className="w-16 h-16 md:w-20 md:h-20 text-primary" />
                </div>
            </CardHeader>
            <CardContent className="flex flex-wrap justify-between lg:gap-0 gap-8">
                <Description className={'lg:w-8/12 w-full'}>{description}</Description>

                <ul className='flex flex-wrap gap-4 items-center justify-start'>
                    {links?.map((link, index) => (
                        <li key={index}>
                            <Link href={link.href}>
                                <Button>{link.title}</Button>
                            </Link>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>

    )
}
