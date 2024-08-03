import React, { Children } from "react";
import { Icon } from "../ui";

export const Listbullet = ({ children, classname }) => {
  return (
    <div
      className={`${classname} flex my-3 `}>
      <Icon.bullet className={" w-2 h-2"} />
      <span className="">{children}</span>
    </div>
  );
};


