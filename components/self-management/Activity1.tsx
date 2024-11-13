import React, { useState } from "react";
import Image from "next/image";
import { SelfManagementCard } from "./SelfManagementCard";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

const questions = [
  {
    id: 1,
    question: "'Thank you for everything,' Mya said.",
    color: "#FF9966",
    bg: "#FFCC99",
  },
  {
    id: 2,
    question:
      "Charlie wanted to shout at the girls that laughed at Mya. Instead of shouting she explained that Mya needed help.",
    color: "#FFD4A0",
    bg: "#FFF2BF",
  },
  {
    id: 3,
    question: "Charlie and Mya decided to rush downtown to save Mya’s dad.",
    color: "#FF9A9A",
    bg: "#F8F8F8",
  },
  {
    id: 4,
    question: "Mya asked Charlie if they were old enough to catch the bus.",
    color: "#FF9A9A",
    bg: "#FFCCCC",
  },
  {
    id: 5,
    question:
      "Charlie and Mya looked straight ahead as they walked down the street.",
    color: "#FF99CC",
    bg: "#FFCCFF",
  },
  {
    id: 6,
    question:
      "Mya continued to worry that she would never see her dad again. She did not know if Charlie’s mom could really help.",
    color: "#A1D0FF",
    bg: "#CCECFF",
  },
  {
    id: 7,
    question:
      "Mya did not comb her hair because she was so upset when she found out about her dad.",
    color: "#A0E8D0",
    bg: "#CCF6E6",
  },
  {
    id: 8,
    question:
      "Charlie was determined to help her friend. She tried to make a good plan for what they should do.",
    color: "#99FF99",
    bg: "#CCFFCC",
  },
];

export const Activity1 = ({ onNextClick, onBackClick }: Props) => {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  const handleSelect = (value: number) => {
    setSelectedValue(value);
  };

  return (
    <div className="w-full">
      <div className="px-10 py-5 h-[90px] gradient-border shadow flex justify-between">
        <button className="" onClick={onBackClick}>
          <Image
            src="/images/Back Button.svg"
            alt="Back Button"
            width={115}
            height={45}
            className="max-w-full h-auto"
            draggable="false"
          />
        </button>
        <button className="">
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

      <div className="self-management w-full h-screen bg-[#FFFEE9]">
        <div className="bg-[#FFFEE9] w-full max-w-[850px] rounded-[10px]  shadow-xl">
          <div className="px-5 py-5">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-[#CA0077] text-xl">Activity</h3>
              <h4 className="text-3xl">Self Management</h4>
              <p className="text-[#3F3F46] text-base font-bold">
                I am in Control
              </p>
            </div>

            <div className="mt-7 flex gap-3">
              <div className="border border-[#FFD4A0] rounded-md bg-[#FFF2BF] py-5 px-5 flex justify-center items-center">
                <h3 className="text-base  font-bold text-[#652D90]">
                  Directions:
                </h3>
              </div>
              <div className="border border-[#FFD4A0] rounded-md bg-[#F8F8F8] py-5 px-5">
                <p className="w-full text-sm mt-2 tracking-wide leading-[28.8px]">
                  Read the sentences. If the character showed good
                  Self-Management Circle Y for YES. Circle N for NO.   Discuss
                  your answer with a Buddy and explain your choice.
                </p>
              </div>
            </div>

            <div className="mt-7">
              <h3 className="text-base font-bold">Answer Choices:</h3>
              <div className="mt-5">
                {questions.map((question, index) => (
                  <SelfManagementCard
                    key={index}
                    question={question}
                    index={index}
                    selectedValue={selectedValue}
                    onSelect={handleSelect}
                  />
                ))}
              </div>
            </div>

            <div className="mt-7">
              <button className="bg-[#FAD8E3] w-full" onClick={onNextClick}>
                <Image
                  src="/images/Button next.svg"
                  alt="Next Button"
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
