import Image from "next/image";
import React from "react";
import imgSrc from "../../assets/post-1.jpg";

const PortfolioPost = () => {
  const postImg = [
    { id: "1", img: imgSrc },
    { id: "2", img: imgSrc },
    { id: "3", img: imgSrc },
  ];

  return (
    <div className="container mx-auto py-9 md:px-12 px-5">
      <div className="flex flex-wrap justify-center aligns-center">
        <div className="grid grid-cols-row md:grid-cols-3 gap-9 ">
          {postImg.map((post) => (
            <div className="text-center w-full btn1" key={post.id}>
              <span className="span">
                <Image
                  src={post.img}
                  alt="postImg"
                  width={1000}
                  height={1000}
                  className="rounded-3xl object-cover img"
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPost;
