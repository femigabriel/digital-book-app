import React from "react";
import Image from "next/image";

export const PersonalDev: React.FC = () => {
  return (
    <div className="w-full px-10 py-7 flex flex-col items-center">
      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 px-10 md:px-20 py-7 w-full max-w-[1200px]">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          <div className="max-w-md">
            <Image
              src="/images/Image-experiences.svg"
              alt="Exciting Experiences"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="max-w-md text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Exciting Experiences
            </h3>
            <p className="text-lg md:text-xl leading-relaxed">
              Discover a carefully curated selection of interactive games and activities that are intricately woven into the storyline, encouraging a deep sense of curiosity, excitement, and exploration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
