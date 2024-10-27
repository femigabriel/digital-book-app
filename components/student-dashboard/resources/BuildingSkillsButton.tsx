import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

type Props = {};

export const BuildingSkillsButton = () => {
  const items: MenuProps["items"] = [
    {
      label: (
        <Link href="/">
          <div className="cursor-pointer resources">
            <Image
              src="/images/Drop1.svg"
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
              src="/images/Drop2.svg"
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
              src="/images/Drop3.svg"
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
    {
      label: (
        <Link href="/">
          <div className="cursor-pointer resources">
            <Image
              src="/images/Drop4.svg"
              alt="resources"
              width={191}
              height={50}
              className="max-w-[191px]"
              draggable="false"
            />
          </div>
        </Link>
      ),
      key: "4",
    },
    {
      label: (
        <Link href="/">
          <div className="cursor-pointer resources">
            <Image
              src="/images/Drop5.svg"
              alt="resources"
              width={191}
              height={50}
              className="max-w-[191px]"
              draggable="false"
            />
          </div>
        </Link>
      ),
      key: "5",
    },
    {
      label: (
        <Link href="/">
          <div className="cursor-pointer resources">
            <Image
              src="/images/Drop6.svg"
              alt="resources"
              width={191}
              height={50}
              className="max-w-[191px]"
              draggable="false"
            />
          </div>
        </Link>
      ),
      key: "6",
    },
  ];

  return (
    <div>
      <Dropdown menu={{ items }} trigger={["click"]} placement="bottom">
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <div className="cursor-pointer resources">
              <Image
                src="/images/Button-2.svg"
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
