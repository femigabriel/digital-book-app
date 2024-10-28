import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@/context/UserContext";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

export const StudentDashboardHeader = () => {
  const user = useUser();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      ),
      icon: <SmileOutlined />,
      disabled: true,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: "4",
      danger: true,
      label: "a danger item",
    },
  ];

  return (
    <div className="w-full bg-[#FFFEE9] px-10 py-5">
      <header className="flex justify-between h-[90px] shadow">
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
        <div className="flex items-center space-x-4">
          {user && (
            <>
              <Image
                src={`/avatar/${user.avatar}`}
                alt="User Avatar"
                width={50}
                height={50}
                className="rounded-full"
              />

              <span className="text-lg font-medium">{user.name}</span>
            </>
          )}
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Hover me
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </header>
    </div>
  );
};
