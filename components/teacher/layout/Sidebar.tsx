import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname to get the current route

const Sidebar = () => {
  const pathname = usePathname(); // Access the current route using usePathname

  return (
    <div className="w-56 h-screen bg-[#FFFFFF] p-4 flex flex-col">
      <nav className="">
        <Link href="/" className="mb-3">
          <li
            className={`flex space-x-2 p-2 px-5 rounded-[24px] cursor-pointer ${
              pathname === "/dashboard"
                ? "text-[#652D90] bg-[#ECE0F5]"
                : "text-[#000000]"
            }`}
          >
            <Image
              src="/icons/Grid.svg"
              alt="Grid-icon"
              width={20}
              height={20}
            />
            <span>Dashboard</span>
          </li>
        </Link>
        <Link href="/activities " className="mb-3">
          <li
            className={`flex items-center space-x-2 p-2 px-5 cursor-pointer ${
              pathname === "/activities"
                ? "text-[#652D90] bg-[#ECE0F5]"
                : "text-[#000000]"
            }`}
          >
            <Image
              src="/icons/Activity.svg"
              alt="Activity-icon"
              width={20}
              height={20}
            />
            <span>Activities</span>
          </li>
        </Link>
        <Link href="/teacher-dashboard/teachers" className="mb-3">
          <li
            className={`flex items-center space-x-2 p-2 px-5 cursor-pointer ${
              pathname === "/teachers"
                ? "text-[#652D90] bg-[#ECE0F5]"
                : "text-[#000000]"
            }`}
          >
            <Image
              src="/icons/Users.svg"
              alt="Users-icon"
              width={20}
              height={20}
            />
            <span>Teachers</span>
          </li>
        </Link>
        <Link href="/teacher-dashboard/students" className="mb-3">
          <li
            className={`flex items-center space-x-2 p-2 px-5 cursor-pointer ${
              pathname === "/students"
                ? "text-[#652D90] bg-[#ECE0F5]"
                : "text-[#000000]"
            }`}
          >
            <Image
              src="/icons/Profile 2user.svg"
              alt="Profile-icon"
              width={20}
              height={20}
            />
            <span>Students</span>
          </li>
        </Link>
        <Link href="/teacher-dashboard/books" className="mb-3">
          <li
            className={`flex items-center space-x-2 p-2 px-5 cursor-pointer ${
              pathname === "/books"
                ? "text-[#652D90] bg-[#ECE0F5]"
                : "text-[#000000]"
            }`}
          >
            <Image
              src="/icons/Book.svg"
              alt="Book-icon"
              width={20}
              height={20}
            />
            <span>Books</span>
          </li>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
