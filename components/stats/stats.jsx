"use client";
import React from "react";
import { Heading } from "@/components/Heading";
import { statsItem } from "@/data/stats";
import { CounterBox } from './counter-box';

const Stats = ({ stats }) => {
    return (
        <div className="container mx-auto  ">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-6 text-center">
                {stats.map((item) => (
                    <CounterBox key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export { Stats };