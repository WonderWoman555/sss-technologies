"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useEffect } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (ev) => {
      gsap.to(cursorRef.current, {
        left: ev.clientX,
        top: ev.clientY,
        duration: 0.4,
        overwrite: "auto"
      });
    };

    const handleMouseClick = (ev) => {
      gsap.to(cursorRef.current, {
        scale: 1.5,
        duration: 0.2,
        onComplete: () => {
          gsap.to(cursorRef.current, {
            scale: 1,
            duration: 0.2,
          });
        },
      });
    };

    window.addEventListener("pointermove", handleMouseMove);
    window.addEventListener("click", handleMouseClick);

    return () => {
      window.removeEventListener("pointermove", handleMouseMove);
      window.removeEventListener("click", handleMouseClick);
    };
  }, []);

  return (
    <div ref={cursorRef} className="fixed custom-cursor top-0 left-0 w-3 h-3 rounded-full bg-primary z-50 pointer-events-none"></div>
  );
}

export default CustomCursor;
