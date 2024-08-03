import Link from "next/link";
import React from "react";

export const Tag = ({ children, className, link, props }) => {
  console.log(link)

  return <div  {...props} className={`${className} bg-gray-50 hover:bg-primary-light cursor-pointer transition-all duration-700 hover:text-white rounded-full px-4 py-2 lg:px-6 lg:py-3 text-sm lg:text-base font-medium lg:font-semibold`}>{children}</div>;
};
