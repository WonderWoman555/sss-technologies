import React from "react";
import Portfolio from "./PortfolioPost";
import Wrapper from "@/components/wrapper/wrapper";
import Overview from "./Overview";
import PortfolioPost from "./PortfolioPost";
import portfolioImg from '@/assets/portfolioImg.jpg'
// import ImageTop from "@/app/blog/ImageTop";
const page = () => {
  return (
    <div>
      <Wrapper heading={'Portfolio Details'}>
        {/* <ImageTop imgSrc={portfolioImg} alt='topimg'/> */}
        <Overview />
        <PortfolioPost/>
      </Wrapper>
    </div>
  );
};

export default page;
