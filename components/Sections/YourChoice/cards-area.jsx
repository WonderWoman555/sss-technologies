import React from 'react'
import { choices } from "@/data";
import { Choicecards } from '@/components/Cards';

export const CardsArea = () => {
    return (
        <div className='w-full justify-between  flex lg:flex-row flex-col gap-5'>
            {choices.map((item, index) => (
                <Choicecards key={index} item={item} />
            ))}
        </div>
    )
}
