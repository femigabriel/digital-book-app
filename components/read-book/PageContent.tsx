import React from "react";
import Image from "next/image";

interface Props {
  content?: string;
  pageNumber: number;
}

export const PageContent = (props: Props) => {
  return (
    <div className="bg-[#F8F8F8] w-full h-full">
      <div className="w-full px-5 mb-5  lg:px-10 py-7 text-md flex items-center justify-center leading-8 bg-[#e1d1f]">
        <div className="text-center flex justify-center items-center text-[1em] text-[#18181B] px-10 lg:px-0">
          <p>{props.content}</p>
        </div>
      </div>
      <div className="flex lg:items-end float-right my-5 lg:mt-10 mx-5">
        <span></span>
        <p className="text-[0.65em]">{props.pageNumber}</p>
      </div>
    </div>
  );
};
