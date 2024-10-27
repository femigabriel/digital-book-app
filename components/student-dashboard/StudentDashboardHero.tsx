import React from "react";
import Image from "next/image";
import Link from "next/link";

export const StudentDashboardHero = () => {
  return (
    <div className="w-full min-h-screen bg-[#FFFEE9] flex flex-col justify-between">
      {/* Hero Image */}
      <div className="flex-grow flex justify-center items-center">
        <Image
          src="/images/STUDENT ZONE.svg"
          alt="about-hero"
          width={516}
          height={516}
          className="w-full max-w-[516.19px]"
        />
      </div>

      <div className="flex justify-between px-10 my-">
        <Link href="/">
          <div className="cursor-pointer">
            <Image
              src="/images/Button-1.svg"
              alt="resources"
              width={191}
              height={50}
              className="max-w-[191px]"
              draggable="false"
            />
          </div>
        </Link>

        <Link href="/">
          <div className="cursor-pointer">
            <Image
              src="/images/Button-2.svg"
              alt="SEL skill building"
              width={50}
              height={50}
              className="w-full max-w-[191px]"
              draggable="false"
            />
          </div>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-[#303030] text-5xl">Welcome to your dashboard</h3>
        <Link href="/">
          <p className="text-[#4A4A4A] text-xl mt-3 cursor-pointer">
            Let's begin.
          </p>
        </Link>
      </div>

      {/* Footer Navigation */}
      <div className="flex justify-center items-center gap-5 w-full my-5">
        <Link href="/">
          <div className="cursor-pointer">
            <Image
              src="/images/button-3.svg"
              alt="SEL games"
              width={191}
              height={50}
              className="max-w-[191px]"
              draggable="false"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};
