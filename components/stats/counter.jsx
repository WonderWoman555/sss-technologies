"use client";
import React, { useEffect, useRef } from 'react';

const Counter = ({ prefix, count, plus, text }) => {
    const counterRef = useRef(null);

    useEffect(() => {
        const counterUp = (el, to) => {
            let count = 1;
            const step = to / 100;
            const updateCounter = () => {
                count += step;
                if (count > to) {
                    el.innerText = to;
                } else {
                    el.innerText = Math.ceil(count);
                    requestAnimationFrame(updateCounter);
                }
            };
            updateCounter();
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        counterUp(counterRef.current, count);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 1.0 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, [count]);

    return (
        <h3 className=" font-semibold ">
            <span className="text-3xl md:text-5xl font-semibold">{prefix}</span>
            <span ref={counterRef} className="text-3xl md:text-5xl counter"></span>
            <span className="text-3xl md:text-5xl font-semibold">{plus}</span>
            <span className="text-1xl md:text-3xl font-medium">{text}</span>
        </h3>
    );
};

export { Counter };