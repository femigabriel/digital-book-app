import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
type Props = {};

export const SelGamesButton = () => {
  const items: MenuProps["items"] = [
    {
      label: (
        <Link href="/">
          <div className="cursor-pointer resources">
            <Image
              src="/images/sel-1.svg"
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
              src="/images/sel-2.svg"
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
  ];

  return (
    <div>
      <Dropdown menu={{ items }} trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <div className="cursor-pointer resources">
              <Image
                src="/images/button-3.svg"
                alt="resources"
                width={191}
                height={50}
                className="max-w-[191px]"
                draggable="false"
              />
            </div>
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};
