import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    {
      href: "/teacher-dashboard",
      label: "Dashboard",
      icon: "/icons/Grid.svg",
      path: "/teacher-dashboard",
    },
    {
      href: "/teacher-dashboard/activities",
      label: "Activities",
      icon: "/icons/Activity.svg",
      path: "/teacher-dashboard/activities",
    },
    {
      href: "/teacher-dashboard",
      label: "Teachers",
      icon: "/icons/Users.svg",
      path: "/teacher-dashboard/teachers",
    },
    {
      href: "/teacher-dashboard/students",
      label: "Students",
      icon: "/icons/Profile 2user.svg",
      path: "/teacher-dashboard/students",
    },
    {
      href: "/teacher-dashboard/books",
      label: "Books",
      icon: "/icons/Book.svg",
      path: "/teacher-dashboard/books",
    },
  ];

  return (
    <div className="fixed w-60 h-screen bg-[#FFFFFF] p-4 flex flex-col">
      <nav className="mt-7">
        <ul>
          {navItems.map((item) => (
            <Link href={item.href} key={item.label}>
              <li
                className={`flex items-center space-x-2 p-2 px-5 mb-3 rounded-[24px] cursor-pointer transition-colors duration-200 ${
                  pathname === item.path
                    ? "text-[#652D90] bg-[#ECE0F5]"
                    : "text-[#000000] hover:bg-[#F5F5F5]"
                }`}
              >
                <Image
                  src={item.icon}
                  alt={`${item.label}-icon`}
                  width={20}
                  height={20}
                />
                <span>{item.label}</span>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
