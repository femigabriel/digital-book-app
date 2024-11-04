import React, { useState } from "react";
import Image from "next/image";
import { Radio } from "antd";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
  setSelectedWord: (word: string) => void;

}

const questions = [
  "Brave",
  "Kind",
  "Smart",
  "Helpful",
  "Friendly",
  "Curious",
  "Creative",
  "Strong",
  "Happy",
  "Thoughtful",
  "Patient",
  "Confident",
  "Caring",
  "Loving",
  "Honest",
  "Funny",
  "Responsible",
  "Grateful",
  "Adventurous",
  "Respectful",
];

export const Activity1 = ({ onNextClick, onBackClick, setSelectedWord }: Props) => {
    const [selectedValue, setSelectedValue] = useState<number | null>(null);

    const handleSelect = (value: number) => {
        setSelectedValue(value);
        setSelectedWord(questions[value - 1]); 
        
      };

  return (
    <div className="w-full bg-[#ECE0F5]">
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

      <div className="self-awareness w-full h-screen bg-[#ECE0F5]">
        <div className="bg-[#ECE0F5] w-full max-w-[750px] rounded-[10px] shadow-xl">
          <div className="px-5 py-5">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-[#CA0077] text-xl">Activity</h3>
              <h4 className="text-3xl">Self-Awareness</h4>
              <p className="text-[#3F3F46] text-base font-bold">Extraordinary Me!</p>
            </div>

            <div className="mt-7">
              <h3 className="text-base font-bold">List of Words:</h3>
              <div className="mt-5 grid grid-cols-5 text-[#303030] text-sm">
                {questions.map((question, index) => (
                  <div
                    key={index}
                    className={`flex w-full mb-5 p-2 cursor-pointer rounded-lg ${
                      selectedValue === index + 1 ? "bg-[#ED008C] text-white" : ""
                    }`}
                    onClick={() => handleSelect(index + 1)}
                  >
                    <Radio
                      checked={selectedValue === index + 1}
                      onChange={() => handleSelect(index + 1)}
                    />
                    <p className="flex gap-2">
                      <span>{index + 1}.</span> {question}
                    </p>
                  </div>
                ))}
              </div>
            </div>

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
