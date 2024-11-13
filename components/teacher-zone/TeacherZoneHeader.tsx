import React from "react";
import Image from "next/image";
import Link from "next/link";

export const TeacherZoneHeader = () => {
  return (
    <div className="w-full bg-[#FFFEE9] py-5 header">
      <header className="flex  w-full justify-between max-h-[90px]  shadow px-10">
        <div>
          <Link href="/">
            <Image
              src="/images/Logo.svg"
              alt="Logo"
              width={50}
              height={50}
              className="w-full max-w-[191px]"
            />
          </Link>
        </div>
        <div></div>
      </header>
    </div>
  );
};
