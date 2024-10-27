import React from "react";
import Image from "next/image";

export const HowItWorks: React.FC = () => {
  return (
    <div className="w-full px-10 py-10 flex flex-col items-center bg-[#2F2F2F]">
      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start mt-10 px-10 md:px-20 py-7 w-full gap-10">
        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
          <div className="flex justify-center">
            <Image
              src="/images/mask group.svg"
              alt="Exciting Experiences"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/3 text-white">
          <div className="max-w-[842px]">
            <h3 className="text-xl font-bold leading-tight mb-6 text-[#FFFFFF]">
              How It Works
            </h3>
            <p className="text-base leading-relaxed mb-6 text-[#E0E0E0]">
              Three Paths LLC is excited to support your classroom with engaging
              Social Emotional Learning (SEL) lessons designed for 3rd to 5th graders.
              Our curriculum integrates seamlessly into your daily routine, making SEL
              an essential part of your students’ learning experience.
            </p>

            {/* Program Overview Section */}
            <div className="p-5">
              <h4 className="text-xl font-semibold mb-4">Program Overview:</h4>
              <p className="mb-4 text-base">
                <strong>Adventures with Charlie:</strong> Join Charlie and her friends as they
                embark on a series of adventures that highlight important SEL traits such as:
              </p>
              <ul className="list-disc list-inside mb-4 text-base">
                <li>Good decision-making</li>
                <li>Optimistic thinking</li>
                <li>Willingness to improve</li>
              </ul>

              <p className="text-lg">
                <strong>Inspiration for Students:</strong> The characters in the Charlie series model behaviors that encourage students to develop their own SEL skills. Your students will be inspired to follow Charlie and her squad in their journey toward emotional growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
