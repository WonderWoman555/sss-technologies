"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

export const Heading = ({ children, heading, style }) => {
  let HeadingType;
  let className;

  const headingRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

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

  useGSAP(
    () => {
      gsap.fromTo(
        headingRef.current,
        {
          opacity: 0,
          duration: 0.5,
          y: 10,
          x: 10,
          ease: "power1",
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.1,
          y: 0,
          ease: "power1",
          scrollTrigger: {
            trigger: headingRef.current,
            marker: true,
          },
        }
      );
    },
    { scope: headingRef }
  );

  // const headingChars = children.split("");

  // return (
  //   <HeadingType
  //     ref={headingRef}
  //     className={`${style} ${className} font-semibold lg:my-2 my-1`}
  //   >
  //     {headingChars?.map((char) => (
  //       <span className="heading">{char}</span>
  //     ))}
  //   </HeadingType>
  // );

  return (
    <HeadingType
      ref={headingRef}
      className={`${style} ${className} heading font-semibold lg:my-2 my-1`}
    >
      {children}
    </HeadingType>
  );
};
