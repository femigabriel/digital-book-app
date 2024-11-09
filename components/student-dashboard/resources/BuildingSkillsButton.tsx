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
        <Link href="/student-dashboard/relationship-skills">
          <div className="cursor-pointer resources">
            <Image
              src="/images/Drop1.svg"
              alt="relationship-skills"
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
        <Link href="/student-dashboard/social-awareness">
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
        <Link href="/student-dashboard/self-awareness">
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
        <Link href="/student-dashboard/optimistic-thinking">
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
        <Link href="/student-dashboard/self-management">
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
        <Link href="/student-dashboard/good-decision-making">
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
