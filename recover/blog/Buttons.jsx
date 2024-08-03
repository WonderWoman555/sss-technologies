import { CustomButton } from "@/components/ui/custom/Button/custom-button";
import React from "react";
import SocialMedia from "./SocialMedia";

const Buttons = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between my-5">
        <div className="flex flex-wrap gap-3 my-5">
          <CustomButton>Website</CustomButton>
          <CustomButton>App Development</CustomButton>
          <CustomButton>SEO</CustomButton>
          <CustomButton>Graphics Design</CustomButton>
        </div>
        <div className="flex space-x-4 justify-end my-5">
          <SocialMedia />
        </div>
      </div>
    </>
  );
};

export default Buttons;
