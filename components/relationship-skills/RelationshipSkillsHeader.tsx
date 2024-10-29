import React from "react";
import Image from "next/image";

export const RelationshipSkillsHeader = () => {
  return (
    <div className="px-10 py-5 h-[90px] bg-[#ECE0F5] shadow flex justify-between items-center">
      <div className="div">
        <button className=" w-full">
          <Image
            src="/images/Back Button.svg"
            alt="Back Button"
            width={115}
            height={45}
            className="max-w-full h-auto"
            draggable="false"
          />
        </button>
      </div>
      <div className="div">
        <button className=" w-full">
          <Image
            src="/images/Frame 110.svg"
            alt="more info"
            width={251}
            height={45}
            className="max-w-full h-auto"
            draggable="false"
          />
        </button>
      </div>
    </div>
  );
};
