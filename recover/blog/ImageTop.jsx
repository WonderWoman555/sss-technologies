import React from "react";
import Image from "next/image";
import stylee from "./ImageTop.module.css";

const ImageTop = ({ imgSrc }) => {
  return (
    <div
      className={`mx-auto max-w-screen-2xl sm:p-3 md:p-8 lg:p-24 ${stylee.btn1}`}
    >
      <Image
        className=" h-auto rounded-2xl md:rounded-3xl"
        src={imgSrc}
        alt="Blog Image"
        layout="responsive"
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default ImageTop;
