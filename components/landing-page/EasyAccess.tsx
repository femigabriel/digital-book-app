import React from "react";
import Image from "next/image";

export const EasyAccess: React.FC = () => {
  return (
    <div className="w-full  px-10 py-7 flex flex-col items-center">
      {/* Content Section */}
      <div className=" flex flex-col md:flex-row justify-between items-center mt-10 px-10 md:px-20 py-7 w-full max-w-[1200px]">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          <div className="max-w-md text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Access the Book Easily
            </h3>
            <p className="text-lg md:text-xl leading-relaxed">
              Acquire a tangible version of your beloved books with a direct
              connection to buy on Amazon, readily available for your
              convenience.{" "}
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="max-w-md">
            <Image
              src="/images/Image-access.svg"
              alt="Engaging Reading"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
