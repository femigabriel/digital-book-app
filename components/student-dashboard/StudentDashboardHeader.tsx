import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@/context/UserContext";

export const StudentDashboardHeader = () => {
  const user = useUser();

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
        </div>
      </header>
    </div>
  );
};
