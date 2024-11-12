import React from "react";
import Image from "next/image";



interface Props {
    illustrator?: any;
  }
  
  export const PageIllustrator = (props: Props) => {
    return (
      <div className="bg-[#FFFEE9] h-full w-full flex justify-center items-center">
        <div className="h-full w-full bg-[] px-5 lg:px-10 lg:py-5">
          {props.illustrator}
        </div>
      </div>
    );
  };
  