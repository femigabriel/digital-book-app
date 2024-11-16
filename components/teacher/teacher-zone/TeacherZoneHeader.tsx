import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "antd";

export const TeacherZoneHeader = () => {
  return (
    <div className="w-full bg-[#FFFEE9] py-5 header">
      <header className="flex  w-full justify-between max-h-[80px]  shadow px-10">
        <div>
          <Link href="/">
            <Image
              src="/images/Logo.svg"
              alt="Logo"
              width={50}
              height={50}
              className="w-full max-w-[151px]"
            />
          </Link>
        </div>
        <Link href='/teacher-dashboard/login' className="flex justify-center items-center">
          <Button className="bg-[#FFFEE9] px-5 py-3 text-sm font-semibold">Login </Button>
        </Link>
      </header>
    </div>
  );
};
