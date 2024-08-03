'use client';
import React from 'react'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { ServicesCard } from '../Cards';
import { allServices } from '@/data/site-data/home/services';

export const ServiceCarousel = () => {
    return (
        <Carousel className="w-full ">
            <CarouselContent>
                {allServices.map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 basis-full w-full lg:basis-1/3">
                        <ServicesCard {..._} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
