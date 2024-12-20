import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { ResourcesButton } from "./resources/ResourcesButton";
import { BuildingSkillsButton } from "./resources/BuildingSkillsButton";
import { SelGamesButton } from "./resources/SelGamesButton";

export const StudentDashboardHero = () => {
  const items: MenuProps["items"] = [
    {
      label: (
        <Link href="/">
          <div className="cursor-pointer resources">
            <Image
              src="/images/DropButton-1.svg"
              alt="resources"
              width={191}
              height={50}
              className="max-w-[191px]"
              draggable="false"
            />
          </div>
        </Link>
      ),

      key: "0",
    },
    {
      label: (
        <Link href="/">
          <div className="cursor-pointer resources">
            <Image
              src="/images/Drop Button-2.svg"
              alt="resources"
              width={191}
              height={50}
              className="max-w-[191px]"
              draggable="false"
            />
          </div>
        </Link>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Link href="/">
          <div className="cursor-pointer resources">
            <Image
              src="/images/Drop Button-3.svg"
              alt="resources"
              width={191}
              height={50}
              className="max-w-[191px]"
              draggable="false"
            />
          </div>
        </Link>
      ),
      key: "3",
    },
  ];

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
     <ResourcesButton />
  
     <BuildingSkillsButton />
        
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
    
        <SelGamesButton />
      </div>
    </div>
  );
};
