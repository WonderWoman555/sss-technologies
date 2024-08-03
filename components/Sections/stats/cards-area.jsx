"use client";
import React from "react";
import { Heading } from "@/components/Heading";
import { CounterBox } from "@/components/stats";

const CardsArea = ({ stats }) => {
    return (
        <div className=" mx-auto w-full">
            <div className="grid w-full px-1 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-6 text-center">
                {stats.map((item) => (
                    <CounterBox key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export { CardsArea };