import React from "react";
import styles from "./marquee.module.css";

const Marquee = ({ marquee }) => {
    return (
        <div className="w-full mx-auto ">
            <div className="bg-primary  shadow-md overflow-hidden">
                <div className="overflow-x-hidden whitespace-nowrap">
                    <div
                        className={`inline-block ${styles.animateMarquee} text-md text-white font-bold text-4xl py-3 ps-5`}
                    >

                        {marquee.map((item) => (
                            <span key={item.id} className="px-5 py-4 inline-block">
                                <span> • </span> {item.text}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Marquee };
