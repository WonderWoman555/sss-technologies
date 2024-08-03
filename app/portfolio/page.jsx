
import { Portfolio } from "./portfolio";
import React from "react";
import Wrapper from "@/components/wrapper/wrapper";

const Page = () => {
  return (
    <Wrapper heading={'portfolio'}>
      <Portfolio />
    </Wrapper>
  );
};

export default Page;
