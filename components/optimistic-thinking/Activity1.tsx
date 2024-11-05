import React, { useState } from "react";
import Image from "next/image";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

const questions = [
  { text: "You are determined." },
  { text: "Great work!" },
  { text: "I don’t need your help." },
  { text: "Could you please stop?" },
  { text: "Love your ideas." },
  { text: "Listen to me!" },
  { text: "I don’t want to talk." },
  { text: "What’s going on?" },
  { text: "I don’t have time for this." },
  { text: "I am smarter than you." },
];

export const Activity1 = ({ onNextClick, onBackClick }: Props) => {
  const [selectedColors, setSelectedColors] = useState<(string | null)[]>(
    Array(questions.length).fill(null)
  );

  const handleCircleClick = (color: string, index: number) => {
    const newSelectedColors = [...selectedColors];
    newSelectedColors[index] = color;
    setSelectedColors(newSelectedColors);
  };

  return (
    <div className="w-full">
      <div className="px-10 py-5 h-[90px] bg-[#ECE0F5] shadow flex justify-between items-center">
        <button className="w-full" onClick={onBackClick}>
          <Image
            src="/images/Back Button.svg"
            alt="Back Button"
            width={115}
            height={45}
            className="max-w-full h-auto"
            draggable="false"
          />
        </button>
        <button className="w-full">
          <Image
            src="/images/Frame 110.svg"
            alt="More info"
            width={251}
            height={45}
            className="max-w-full h-auto"
            draggable="false"
          />
        </button>
      </div>

      <div className="optimistic-thinking w-full h-full bg-[#82B77C]">
        <div className="bg-[#FFFEE9] w-full max-w-[750px] flex justify-center rounded-[10px] shadow-xl items-center">
          <div className="px-5 py-5">
            {/* Instructions Section */}
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-[#CA0077] text-xl">Instructions for Students:</h3>
              <h4 className="text-3xl">Optimistic Thinking</h4>
              <p className="text-[#3F3F46] text-base font-bold">It’s All Good</p>
            </div>
            <div className="flex flex-col mt-7 justify-center">
              <p className="w-full text-sm mt-5 tracking-wide leading-[28.8px]">
                Good communication skills is one way to help build healthy relationships.
                Read the sentences and choose the answer you think is best.
                When you are done, you can compare your choices with the answer sheet at the end of the activity.
              </p>
            </div>

            {/* Questions Section */}
            <div className="mt-7">
              <h3 className="text-base font-bold text-[#652D90]">Sentences to Evaluate:</h3>
              <div className="flex flex-col mt-5 space-y-2 bg-white shadow-md px-3 py-3">
                {questions.map((question, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div className="text-sm text-[#303030] font-medium">
                      {index + 1}. {question.text}
                    </div>
                    <div className="flex gap-4">
                      {/* Clickable Circles with Faded Effect */}
                      <div
                        className={`w-8 h-8 rounded-full cursor-pointer ${
                          selectedColors[index] === "green" ? "bg-[#17C964]/20" : "bg-[#17C964]"
                        }`}
                        onClick={() => handleCircleClick("green", index)}
                      ></div>
                      <div
                        className={`w-8 h-8 rounded-full cursor-pointer ${
                          selectedColors[index] === "yellow" ? "bg-[#D8CE00]/20" : "bg-[#D8CE00]"
                        }`}
                        onClick={() => handleCircleClick("yellow", index)}
                      ></div>
                      <div
                        className={`w-8 h-8 rounded-full cursor-pointer ${
                          selectedColors[index] === "red" ? "bg-[#F31260]/20" : "bg-[#F31260]"
                        }`}
                        onClick={() => handleCircleClick("red", index)}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <div className="mt-7">
              <button className="bg-[#FAD8E3] w-full" onClick={onNextClick}>
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
    </div>
  );
};
