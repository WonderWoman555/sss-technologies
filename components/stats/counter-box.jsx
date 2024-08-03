import React from 'react';
import { Description } from "@/components/Description";
import { Counter } from './counter';

const CounterBox = ({ item }) => {
    return (
        <div className="flex-grow w-full py-9 my-1.5 bg-white rounded-3xl ">
            <div className="counter-box w-full">
                <Counter
                    prefix={item.prefix}
                    count={item.count}
                    plus={item.plus}
                    text={item.text}
                />
                <Description className="py-4">{item.description}</Description>
            </div>
        </div>
    );
};

export { CounterBox };