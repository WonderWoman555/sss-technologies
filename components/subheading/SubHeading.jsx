

import React from "react";

export const SubHeading = ({ children, heading, style }) => {
  let HeadingType;
  let className;

  switch (heading) {
    case "h1":
      HeadingType = "h1";
      className = "xl:text-7xl lg:text-6xl sm:text-4xl text-2xl font-semibold ";
      break;
    case "h2":
      HeadingType = "h2";
      className = "text-lg md:text-4xl font-bold ";
      break;
    case "h3":
      HeadingType = "h3";
      className = "text-2xl font-semibold";
      break;
    case "h4":
      HeadingType = "h4";
      className = "text-xl font-semibold";
      break;
    case "h5":
      HeadingType = "h5";
      className = "text-lg font-medium ";
      break;
    case "h6":
      HeadingType = "h6";
      className = "font-medium text-lg md:text-2xl text-primary-light md:text-start text-center";
      break;

    default:
      HeadingType = "h2";
      className = "sm:text-lg font-bold ";
  }

  return (
    <HeadingType
      className={`${style} ${className} heading font-semibold lg:my-2 my-1`}
    >
      {children}
    </HeadingType>
  );
};
