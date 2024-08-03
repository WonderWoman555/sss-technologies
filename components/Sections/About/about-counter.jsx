"use client";
import { Icon } from "@/components/ui";
import { useEffect, useState, useRef } from "react";

const AboutCounter = ({ className }) => {
    const [count, setCount] = useState(0);
    const [startCounter, setStartCounter] = useState(false);
    const counterRef = useRef(null);

    const handleScroll = () => {
        if (counterRef.current) {
            const topPosition = counterRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (topPosition < windowHeight) {
                setStartCounter(true);
                window.removeEventListener("scroll", handleScroll);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (startCounter) {
            let currentCount = 0;
            const incrementCounter = () => {
                if (currentCount < 30) {
                    currentCount += 1;
                    setCount(currentCount);
                } else {
                    clearInterval(counterInterval);
                }
            };
            const counterInterval = setInterval(incrementCounter, 50);
            return () => clearInterval(counterInterval);
        }
    }, [startCounter]);

    return (
        <>
            <div className="relative">
                <div
                    ref={counterRef}
                    className={`${className}  rounded-3xl bg-primary text-white`}
                >
                    <div className="flex justify-center items-center">
                        <div className="icon flex justify-center items-center">
                            <Icon.rightbadge />
                        </div>
                        <div className="pl-3">
                            <div className="text-2xl md:text-3xl lg:text-4xl font-bold">
                                {count} +
                            </div>
                            <div className="text-sm md:text-base lg:text-lg">
                                Work Experience
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export { AboutCounter };
