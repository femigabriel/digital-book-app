import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div className=" w-full bg-[#FFFEE9] hero">
      <header className="flex justify-between h-[90px] shadow">
        <div className="div">
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
