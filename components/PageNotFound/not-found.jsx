"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ImagePage from "@/assets/404-error-img.png";
import { Tag } from "@/components/Sections/Tag";

const buttons = [{ name: "Back To Home" }];

export const PageNotFound = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="text-center">
        <Image
          src={ImagePage}
          width={500}
          height={500}
          alt="Page not found image"
          className="mx-auto mt-10 lg:w-[500px] lg:h-[500px] w-full h-auto"
        />
        <h1 className="lg:text-5xl text-3xl font-bold mt-10">
          Page Not Found!
        </h1>
        <p className="mt-4 text-lg">
          We&apos;re sorry&#44; the page you requested could not be found.
        </p>
      
        <ul className="flex flex-wrap items-center justify-center gap-5 my-10">
          {buttons.map((button, index) => (
            <li key={index}>
              <Link href={'/'}>
              
                  <Tag>{button.name}</Tag>
                
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};
