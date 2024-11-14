import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-5 h-[90px] bg-white shadow-md">
      <div className="mt-5">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/images/Logo.svg"
            alt="Logo"
            width={50}
            height={50}
            className="w-full max-w-[151px]"
          />
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <button className="bg-[#652D90] rounded-[24px] text-white px-4 py-2">
          Create New SEL Activity
        </button>
        <span>Ezydesign</span>
        <Avatar
          // src="/path-to-avatar.png"
          alt="User Avatar"
          size={40}
          icon={<UserOutlined />}
        />
      </div>
    </div>
  );
};

export default Header;
