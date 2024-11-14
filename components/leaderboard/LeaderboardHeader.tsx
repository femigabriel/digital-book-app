import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@/context/UserContext";
import {
  DownOutlined,
  SmileOutlined,
  BookOutlined,
  StarOutlined,
  TrophyOutlined,
  DollarOutlined,
  UserAddOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

export const LeaderboardHeader = () => {
  const user = useUser();
  console.log({ user });
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link href="/read-book">
          <span className="text-sm font-bold text-[#652D90]">Read Books</span>
        </Link>
      ),
      icon: <BookOutlined />,
    },
    {
      key: "2",
      label: (
        <Link href="/activities">
          <span className="text-sm font-bold text-[#652D90]">Activities</span>
        </Link>
      ),
      icon: <SmileOutlined />,
    },
    {
      key: "3",
      label: (
        <Link href="/purchase-books">
          <span className="text-sm font-bold text-[#652D90]">
            Purchase Books
          </span>
        </Link>
      ),
      icon: <DollarOutlined />,
    },
    {
      key: "4",
      label: (
        <Link href="/leaderboard">
          <span className="text-sm font-bold text-[#652D90]">Leaderboard</span>
        </Link>
      ),
      icon: <StarOutlined />,
    },
    {
      key: "5",
      label: (
        <Link href="/scores">
          <span className="text-sm font-bold text-[#652D90]">Scores</span>
        </Link>
      ),
      icon: <TrophyOutlined />,
    },

    {
      key: "6",
      label: (
        <Link href="/change-avatar">
          <span className="text-sm font-bold text-[#652D90]">
            Change Avatar
          </span>
        </Link>
      ),
      icon: <UserAddOutlined />,
    },
    {
      key: "7",
      danger: true,
      label: "Logout",
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <div className="w-full score-header py-5 header">
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
            <button onClick={(e) => e.preventDefault()}>
              <Space>
                <DownOutlined />
              </Space>
            </button>
          </Dropdown>
        </div>
      </header>
    </div>
  );
};
