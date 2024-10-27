import React from "react";
import Image from "next/image";

export const OnePlatform: React.FC = () => {
  return (
    <div className="w-full  px-10 py-7 flex flex-col items-center">
      {/* Header Block */}
      <div className="flex justify-center items-center w-full">
        <Image
          src="/images/Header Block.svg"
          alt="Logo"
          width={50}
          height={50}
          className="w-full max-w-[85%] h-auto"
          draggable="false"
        />
      </div>

      {/* Content Section */}
      <div className=" flex flex-col md:flex-row justify-between items-center mt-10 px-10 md:px-20 py-7 w-full max-w-[1200px]">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          <div className="max-w-md text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Engaging Reading Experience
            </h3>
            <p className="text-lg md:text-xl leading-relaxed">
              Immerse yourself in the heartwarming narrative with our interactive book that replicates the tactile experience of a physical book, allowing you to truly engage with the story on a deeper level and experience every page turn as if you were holding a real book in your hands.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="max-w-md">
            <Image
              src="/images/multi-function-image.svg"
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
