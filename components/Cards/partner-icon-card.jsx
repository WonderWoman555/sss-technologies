import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Icon } from '../ui'



export const PartnerIconCard = ({ title }) => {
    return (

        <div className="text-xs md:text-xl bg-mute flex items-center lg:justify-center justify-start px-5 py-2 md:py-4 lg:py-5 rounded-2xl">
            <Icon.SampleLogo className={'lg:w-9/12 w-10/12'} />
        </div>

    )
}
