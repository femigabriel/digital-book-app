import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ScoreSheetButton } from "./resources/ScoreSheetButton";
import { StudentResourcesBtn } from "./resources/StudentResourcesBtn";

export const HeroPage = () => {
  return (
    <div className=" px-10  w-full pb-">
      {/* Header Section */}

      <div className="text-center mt-5">
        <div className="flex justify-center items-center mb-4 ">
          <h1 className="text-4xl font-bold text-green-800">
            Three Paths Ile Social Emotion Learning
          </h1>
        </div>
        <p className="text-md text-gray-700">
          A platform with a unique blend of Reading and Activities, Inspired by
          Charlie's Big Gift.
        </p>
      </div>

      {/* Welcome Section */}
      <div className="flex justify-between px-10 w-full">
        {/*Left content  */}
        <div className="">
          <div className="cursor-pointer">
            <Image
              src="/images/Group 1000007853.svg"
              alt="Logo"
              width={50}
              height={50}
              className="w-full max-w-[191px]"
              draggable="false"
            />
          </div>
          <div className="cursor-pointer my-3">
            <Image
              src="/images/Resources Button.svg"
              alt="Logo"
              width={50}
              height={50}
              className="w-full max-w-[191px]"
              draggable="false"
            />
          </div>
         
          <ScoreSheetButton />
        </div>

        {/* Character Images */}
        <div className="flex items-center justify-center space-x-4 mt-2 pt-14">
          {/* First Character Image */}
          <div className="">
            <Image
              src="/images/Right Image Container.svg" // Replace with your second character image path
              alt="Character 1"
              width={250}
              height={250}
              className="rounded-md"
              draggable="false"
            />
          </div>

          {/* last Character Image */}
          <div className="">
            <Image
              src="/images/Left Image Container.svg" 
              alt="Character 2"
              width={250}
              height={250}
              className="rounded-md"
              draggable="false"
            />
          </div>
        </div>

        {/* Right content */}
        <div className="">
          <Link href="/login">
            <div className="cursor-pointer">
              <Image
                src="/images/student-login.svg"
                alt="Logo"
                width={50}
                height={50}
                className="w-full max-w-[191px]"
                draggable="false"
              />
            </div>
          </Link>
          <div className="cursor-pointer my-3">
            <Image
              src="/images/student-zone.svg"
              alt="Logo"
              width={50}
              height={50}
              className="w-full max-w-[191px]"
              draggable="false"
            />
          </div>
       
          <StudentResourcesBtn />
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex justify-center items-center gap-5 w-full mt-12 mb-7">
        <Link href="/">
          <div className="cursor-pointer">
            <Image
              src="/images/home-page.svg"
              alt="about-us"
              width={191}
              height={50}
              className="max-w-[191px]"
              draggable="false"
            />
          </div>
        </Link>
        <Link href="/about-us">
          <div className="cursor-pointer">
            <Image
              src="/images/Group 1000007856.svg"
              alt="about-us"
              width={50}
              height={50}
              className="w-full max-w-[191px]"
              draggable="false"
            />
          </div>
        </Link>
        <Link href="/teacher-chat">
          <div className="cursor-pointer">
            <Image
              src="/images/Teacher Chat Button.svg"
              alt="Logo"
              width={50}
              height={50}
              className="w-full max-w-[191px]"
              draggable="false"
            />
          </div>
        </Link>
        <Link href="/sel-lit">
          <div className="cursor-pointer">
            <Image
              src="/images/SEL and Literature Button.svg"
              alt="Logo"
              width={50}
              height={50}
              className="w-full max-w-[191px]"
              draggable="false"
            />
          </div>
        </Link>
        <Link href="/contact-us">
          <div className="cursor-pointer">
            <Image
              src="/images/Contact Us Button.svg"
              alt="Logo"
              width={50}
              height={50}
              className="w-full max-w-[191px]"
              draggable="false"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};
