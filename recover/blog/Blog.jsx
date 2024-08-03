import { Description } from "@/components/Description/description";
import { Heading } from "@/components/Heading/heading";
import { Icon } from "@/components/ui/icons";
import React from "react";
import { Button } from "@/components/ui/button";
import Buttons from "./Buttons";
import { Partners } from "@/components/Sections/Partners/Partners";
import { AllBlogs } from "@/components/Sections/Blog/all-blogs";
import { Listbullet } from "@/components/Listbullet/Listbullet";
import List from "@/recover/blog/List";

// const Blog = () => {
//   return (
//     <>
//       {" "}
//       <div
//         className="m-auto 
//      max-w-7xl px-6 lg:px-14"
//       >
//         <Description className="text-lg my-5">
//           {" "}
//           In today&apos;s rapidly evolving digital landscape, technology
//           continues to shape the way we live, work, and interact with the world
//           around us. From artificial intelligence and blockchain to virtual
//           reality and quantum computing, the possibilities seem limitless.
//         </Description>

//         <Description className="text-lg my-4">
//           {" "}
//           In this post, we&apos;ll delve into some of the latest advancements
//           and trends reshaping the future of technology: AI is revolutionizing
//           industries ranging from healthcare and finance to manufacturing and
//           transportation. With machine learning algorithms and neural networks
//           becoming increasingly sophisticated, AI has the potential to transform
//           how businesses operate and deliver value to customers.
//         </Description>

//         <h1 className="text-5xl font-semibold text-black py-9">
//           Blockchain Technology
//         </h1>

//         <Description className="text-lg my-4">
//           {" "}
//           Blockchain, the underlying technology behind cryptocurrencies like
//           Bitcoin and Ethereum, is gaining traction beyond the realm of finance.
//           Its decentralized and immutable nature makes it ideal for applications
//           such as supply chain management, identity verification, and smart
//           contracts.
//         </Description>
//         <div className="text-1xl md:text-3xl flex gap-4 p-12 my-6 bg-mute rounded-3xl">
//           <div>
//             <Icon.backquote className={"w-22 h-30 "} />
//           </div>
//           <div className={"my-auto font-medium"}>
//             As we look ahead, it&apos;s clear that technology will play an
//             increasingly central role in shaping the future of society.
//           </div>
//         </div>

//         {/* <List /> */}

//         <Description className="text-lg my-4">
//           {" "}
//           In this post, we&apos;ll delve into the latest developments and trends
//           in AI technology. We&apos;ll explore the applications of machine
//           learning, deep learning, and natural language processing, highlighting
//           their impact across diverse domains such as healthcare, finance, and
//           transportation.
//         </Description>

//         <hr />

//         <Buttons className="my-5" />
//       </div>
//       <div
//         className="m-auto 
//      max-w-screen-2xl lg:px-8"
//       >
//         <Heading heading={"h6"}>Related Articles</Heading>
//         <Heading heading={"h1"}>You may also like this</Heading>

//         <div className="my-20 ">
//           {/* <AllBlogs /> */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Blog;

// import React from 'react'

const Blog = () => {
  return (
    <>
      <div
        className="m-auto max-w-7xl px-6 lg:px-14">
        <Description className="text-lg my-5">
          {" "}
          In today &apos; s rapidly evolving digital landscape, technology
          continues to shape the way we live, work, and interact with the world
          around us. From artificial intelligence and blockchain to virtual
          reality and quantum computing, the possibilities seem limitless.
        </Description>

        <Description className="text-lg my-4">
          {" "}
          In this post, we &apos; ll delve into some of the latest advancements
          and trends reshaping the future of technology: AI is revolutionizing
          industries ranging from healthcare and finance to manufacturing and
          transportation. With machine learning algorithms and neural networks
          becoming increasingly sophisticated, AI has the potential to transform
          how businesses operate and deliver value to customers.
        </Description>

        <h1 className="text-5xl font-semibold text-black py-9">
          Blockchain Technology
        </h1>

        <Description className="text-lg my-4">
          {" "}
          Blockchain, the underlying technology behind cryptocurrencies like
          Bitcoin and Ethereum, is gaining traction beyond the realm of finance.
          Its decentralized and immutable nature makes it ideal for applications
          such as supply chain management, identity verification, and smart
          contracts.
        </Description>
        <div className="text-1xl md:text-3xl flex gap-4 p-12 my-6 bg-mute rounded-3xl">
          <div>
            <Icon.backquote className={"w-22 h-30 "} />
          </div>
          <div className={"my-auto font-medium"}>
            As we look ahead, it &apos; s clear that technology will play an
            increasingly central role in shaping the future of society.
          </div>
        </div>

        <List />

        <Description className="text-lg my-4">
          {" "}
          In this post, we&apos;ll delve into the latest developments and trends
          in AI technology. We&apos;ll explore the applications of machine
          learning, deep learning, and natural language processing, highlighting
          their impact across diverse domains such as healthcare, finance, and
          transportation.
        </Description>

        <hr />

        <Buttons className="my-5" />
      </div>
      <div
        className="m-auto 
     max-w-screen-2xl lg:px-8"
      >
        <Heading heading={"h6"}>Related Articles</Heading>
        <Heading heading={"h1"}>You may also like this</Heading>

        <div className="my-20 ">
          <AllBlogs />
        </div>
      </div>
    </>
  )
}

export default Blog