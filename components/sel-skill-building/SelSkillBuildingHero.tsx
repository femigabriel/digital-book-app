import React from "react";
import Image from "next/image";
import Link from "next/link";

export const SelSkillBuildingHero = () => {
  return (
    <div className="w-full min-h-screen bg-[#FFFEE9] flex flex-col justify-between">
      {/* Hero Image */}
      <div className="flex-grow flex justify-center items-center">
        <Image
          src="/images/Group 1000007874.svg"
          alt="about-hero"
          width={516}
          height={516}
          className="w-full max-w-[516.19px]"
        />
      </div>

      <div className="flex justify-between px-10 my-"></div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-[#303030] text-5xl">Welcome to your dashboard</h3>
        <Link href="/">
          <p className="text-[#4A4A4A] text-xl mt-3 cursor-pointer">
            Let's begin.
          </p>
        </Link>
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
        <Link href="/teacher-zone">
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
        <Link href="/sel-skill-building">
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
