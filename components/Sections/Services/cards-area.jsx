import { ServicesCard } from '@/components/Cards'
import { allServices } from '@/data/site-data/home/services'
import React from 'react'

export const CardsArea = () => {
    return (
        <div>
            <ul className='w-full lg:gap-6 gap-5 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 
            justify-self-center place-items-center content-center'>
                {allServices.map((_, i) => (
                    <ServicesCard icon={i} key={i} title={_.title} description={_.description}image={_.image} />
                ))}
            </ul>
        </div>
    )
}
