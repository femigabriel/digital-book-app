import React from "react";
import Image from "next/image";



interface Props {
    illustrator?: any;
  }
  
  export const PageIllustrator = (props: Props) => {
    return (
      <div className="bg-[#E1D1F6] h-full w-full flex justify-center items-center">
        <div className="h-full w-full bg-[#E1D1F6] px-5 lg:px-10 lg:py-5">
          {props.illustrator}
        </div>
      </div>
    );
  };
  