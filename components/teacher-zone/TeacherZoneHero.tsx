import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StudentResourcesBtn } from "../landing-page/resources/StudentResourcesBtn";

export const TeacherZoneHero = () => {
  return (
    <div className="w-full min-h-screen bg-[#FFFEE9] teacher- flex flex-col justify-between">
      {/* Hero Image */}
      <div className="flex w-full justify-between">
        <div className="flex justify-center items-center px-10">
          <StudentResourcesBtn />
        </div>
        <div className="">
          <Image
            src="/images/Group 1000007885.svg"
            alt="about-hero"
            width={516}
            height={516}
            className="w-full max-w-[816.19px]"
          />
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
