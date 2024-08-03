"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReviewCard } from "../Cards/review-card";
import { reviewData } from "@/data/review";
// import { reviewSliderSettings } from "@/utils/helper";

const reviewSliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1024, // medium screens
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 640, // small screens
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

export const ReviewCarousel = () => {
    return (
        <div className="w-full  rounded-2xl flex justify-center">
            <div className=" w-full">
                <Slider {...reviewSliderSettings}>
                    {reviewData?.map((item, index) => (
                        <ReviewCard key={index} review={item} />
                    ))}
                </Slider>
            </div>
        </div>
    );
};
