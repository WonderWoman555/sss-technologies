"use client";
import React from "react";
import { Button } from "@/components/ui/button";

import style from "@/components/ui/custom/Button/button.module.scss";
import { Icon } from "../..";

export const CustomButton = React.forwardRef(
    ({ children, className, arrow = true, ...props }, ref) => {
        return (
            <Button
                {...props}
                className={`${style['sliding-effect']} ${className} 
                sm:flex  gap-3 items-center justify-center 
                rotate-0 bg-primary border border-transparent 
              hover:border-primary overflow-hidden 
                rounded-full py-[22px] px-5 text-base font-semibold group
            hover:text-primary
        `}
            >
                {children}{" "}
                {arrow && <Icon.Arrow className="w-4 h-4 group-hover:rotate-45 transition-all duration-200 text-white group-hover:text-primary" />}
            </Button>
        );
    }
);

CustomButton.displayName = "button"