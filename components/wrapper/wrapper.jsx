'use client'
import { usePathname } from "next/navigation";
import React from "react";
import "utils/helper";

const Wrapper = ({ children, heading }) => {
  const pathname = usePathname();
  const pathArr = pathname.split("/").filter((str, i)=> str.length !== 0)
  const path = pathArr[pathArr.length - 1];
  const pageName = path.split("-").join(" ").firstLetterCapital();

  return (
    <>
      <div className="h-[40vh] lg:h-[50vh] bg-mute w-full flex items-center justify-center  ">
        <div className="bg-wrapper bg-no-repeat bg-contain bg-right-top relative"></div>
        <div className="bg-gradient-to-r from-white/100  via-white/90 to-transparent"></div>
        <div className="flex text-center justify-center items-center w-full h-full ">
          <div className="flex flex-col gap-2 text-center justify-center items-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-center">
              {pageName}
            </h1>
            <button className="text-indigo-600 text-sm rounded-full px-6 py-1 mt-2 bg-white border-2 border-indigo-600">
              {pathArr.map((path, i) => (
                <React.Fragment key={i}>
                  {i === 0 ? "home / " : `${path} ${i !== pathArr.length - 1 ? "/ " : ""}`}
                </React.Fragment>
              ))}
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-full">{children}</div>
    </>
  );
};

export default Wrapper;
