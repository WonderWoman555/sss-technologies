import Image from "next/image";
import React from "react";
import about2 from "@/assets/page-about-2.jpg";

const AboutImg = () => {
    return (
        <div className="">
            <div className="bg-white rounded-[40px]">
                <div className="p-1 btn1">
                    {" "}
                    <Image src={about2} className="rounded-[40px] w-full h-full" />{" "}
                </div>
            </div>
        </div>
    );
};

export { AboutImg };
