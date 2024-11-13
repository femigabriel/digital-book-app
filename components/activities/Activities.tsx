import React from "react";
import Image from "next/image";
import Link from "next/link";
export const Activities = () => {
  return (
    <div className="px-10 py-7">
      <div className="grid grid-cols-4 gap-5 space-y-">
        <Link href="/student-dashboard/relationship-skills">
          <Image
            src="/images/Card-1.svg"
            alt="Back Button"
            width={298}
            height={56}
            className="max-w-full h-auto cursor-pointer"
            draggable="false"
          />
        </Link>

        <Link href="/student-dashboard/social-awareness">
          <Image
            src="/images/Card-2.svg"
            alt="Back Button"
            width={298}
            height={56}
            className="max-w-full h-auto cursor-pointer"
            draggable="false"
          />
        </Link>

        <Link href="/student-dashboard/self-management">
          <Image
            src="/images/Card-3.svg"
            alt="Back Button"
            width={298}
            height={56}
            className="max-w-full h-auto cursor-pointer"
            draggable="false"
          />
        </Link>

        <Link href="/student-dashboard/good-decision-making">
          <Image
            src="/images/Card-4.svg"
            alt="Back Button"
            width={298}
            height={56}
            className="max-w-full h-auto cursor-pointer"
            draggable="false"
          />
        </Link>

        <Link href="/student-dashboard/self-awareness">
          <Image
            src="/images/Card-5.svg"
            alt="Back Button"
            width={298}
            height={56}
            className="max-w-full h-auto cursor-pointer"
            draggable="false"
          />
        </Link>

        <Link href="/student-dashboard/relationship-skills">
          <Image
            src="/images/Card-6.svg"
            alt="Back Button"
            width={298}
            height={56}
            className="max-w-full h-auto cursor-pointer"
            draggable="false"
          />
        </Link>

        <Link href="/student-dashboard/optimistic-thinking">
          <Image
            src="/images/Card-7.svg"
            alt="Back Button"
            width={298}
            height={56}
            className="max-w-full h-auto cursor-pointer"
            draggable="false"
          />
        </Link>

        <Link href="/student-dashboard/relationship-skills">
          <Image
            src="/images/Card-8.svg"
            alt="Back Button"
            width={298}
            height={56}
            className="max-w-full h-auto cursor-pointer"
            draggable="false"
          />
        </Link>
      </div>
    </div>
  );
};
