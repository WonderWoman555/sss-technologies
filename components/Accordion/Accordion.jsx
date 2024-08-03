"use client";
import { Icon } from "@/components/ui";
import React, { useState } from "react";

export const AccordionFaqs = ({ faqs }) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className=" lg:me-10 w-full md:me-3 sm:me-1 flex flex-col gap-2">
            {faqs.map((item, index) => (
                <div key={index} className="mb-2 border-gray-300">
                    <div
                        className={`cursor-pointer font-semibold flex justify-between items-center py-4 px-5 rounded-2xl text-lg ${activeIndex === index ? "bg-primary-light text-white" : "bg-mute"
                            }`}
                        onClick={() => toggleAccordion(index)}
                    >
                        {item.question}
                        <span>
                            {activeIndex === index ? (
                                <svg
                                    className="w-6 h-6 transform rotate-180 transition-transform duration-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    ></path>
                                </svg>

                                // <Icon.ChevronDown className={'w-6 h-6 transform rotate-180 transition-transform duration-700'}/>
                            ) : (
                                <svg
                                    className="w-6 h-6 transform rotate-0 transition-transform duration-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    ></path>
                                </svg>

                                // <Icon.ChevronUp/>
                            )}
                        </span>
                    </div>
                    <div
                        className={`accordion-content overflow-hidden transition-max-height duration-500 ease-in-out ${activeIndex === index ? "max-h-40" : "max-h-0"
                            }`}
                    >
                        <div className="p-4 bg-white transition-all duration-500">{item.answer}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};
