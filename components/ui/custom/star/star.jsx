import React from "react";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

export const Star = ({ stars }) => {
    const ratingStar = Array.from({ length: 5 }, (e, index) => {
        let number = index + 0.5;
        return (
            <span key={index}>
                {stars >= index + 1 ? (
                    <IoStar className="text-orange-400 text-xl" />
                ) : stars >= number ? (
                    <IoStarHalf className="text-orange-400 text-xl" />
                ) : (
                    <IoStarOutline className="text-orange-400 text-xl" />
                )}
            </span>
        );
    });

    return (
        <div>
            <div className="flex gap-2">
                {ratingStar}
            </div>
        </div>
    );
};