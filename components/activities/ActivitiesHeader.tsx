import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const ActivitiesHeader = () => {
  const [userData, setUserData] = useState<{ name: string; avatar: string } | null>(null);

  useEffect(() => {
    // Replace with actual logic to retrieve user data from state, API, or local storage
    const storedUserData = JSON.parse(localStorage.getItem("userData") || "{}");
    if (storedUserData && storedUserData.name && storedUserData.avatar) {
      setUserData(storedUserData);
    }
  }, []);

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
          {userData?.avatar && (
            <Image
              src={`/avatar/Avatar Option${userData.avatar}.svg`}
              alt="User Avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
          )}
          <span className="font-semibold text-gray-700">{userData?.name}</span>
        </div>
      </header>
    </div>
  );
};
