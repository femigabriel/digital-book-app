import React from "react";
import Image from "next/image";

export const Activity1 = () => {
  return (
    <div className="relationship-skill w-full h-screen bg-[#ECE0F5]">
      <div className=" bg-[#ECE0F5] w-full max-w-[750px] rounded-[10px] shadow-xl ">
        <div className="px-5 py-5">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-[#CA0077] text-xl">Activity</h3>
            <h4 className="text-3xl">Charlie’s Choices</h4>
            <p className="text-[#3F3F46] text-base font-bold">
              Relationship Skills Rock!
            </p>
          </div>
          <div className="flex flex-col mt-7">
            <h3 className="text-base font-bold text-[#652D90]">Directions::</h3>
            <p className="text-sm my-2 mt-3 font-semibold">
              Read each sentence carefully and choose the best answer. Refer to
              Charlie’s choices and review the definitions.
            </p>

          </div>
          <div className="mt-3">
            <p className="text-sm">1. Charlie’s mother said, “Some kids are not only away from parents but they have also left their home.” Charlie said, “That’s horrible,” and she began to cry.</p>
       <div className="lg:flex gap-3 w-full mt-3">
        <span className="text-sm">Charlie is showing</span>
        <input type="text"  className="w-full max-w-[550px] bg-inherit border border-[#303030] border-x-0 border-t-0"/>
       </div>
          </div>

          <div className="mt-7 ">
            <button className="bg-[#FAD8E3] w-full">
              <Image
                src="/images/Button next.svg"
                alt="Contact Illustration"
                width={64}
                height={64}
                className="max-w-full w-full h-auto"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
