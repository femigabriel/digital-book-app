import React, { useContext, useState } from "react";
import Image from "next/image";
import { Radio } from "antd";
import { BusStopCard } from "./BusStopCard";
import { ResultContext } from "@/context/ResultContext";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

const questions = [
  {
    id: 11,
    busNumber: 11,
    content: "Why did you buy that shirt, it’s too small",
    Descriptions: "Recognizing and valuing the good things.",
    correctAns: "true",
  },
  {
    id: 12,
    busNumber: 12,
    content: "Let’s work together",
    Descriptions: "Giving a portion of what you have to others.",
    correctAns: "true",
  },
  {
    id: 13,
    busNumber: 13,
    content: "I appreciate you",
    Descriptions: "Being kind and pleasant to others.",
    correctAns: "true",
  },
  {
    id: 14,
    busNumber: 14,
    content: "I’m in charge, not you!",
    Descriptions: "Trying to force others to do something.",
    correctAns: "false",
  },
  {
    id: 15,
    busNumber: 15,
    content: "Move",
    Descriptions: "Telling others what to do in a domineering way.",
    correctAns: "true",
  },
];

export const BusStop3 = ({ onNextClick, onBackClick }: Props) => {
  const resultContext = useContext(ResultContext);
  const { state } = resultContext;

  const handleSetResult = (r: boolean, id: string) => {
    resultContext.dispatch({
      type: "setBusStopResults",
      payload: [...(state?.busStopResults ?? []), { isCorrect: r, id: id }],
    });
  };

  return (
    <div className="w-full">
      <div className="px-10 py-5 h-[90px] bg-[#ECE0F5] shadow flex justify-between items-center">
        <div className="div">
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
        </div>
        <div className="div">
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
      </div>
      <div className="bus-stop w-full h-screen bg-[#ECE0F5]">
        <div className="bg-[#ECE0F5] w-full max-w-[750px] rounded-[10px] shadow-xl">
          <div className="px-5 py-5">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-[#CA0077] text-xl">Activity</h3>
              <h4 className="text-3xl">Charlie’s Choices</h4>
              <p className="text-[#3F3F46] text-base font-bold">
                I am in Control
              </p>
            </div>

            {/* Questions and Radio Inputs */}
            <div className="mt-7">
              {questions.map((list, index) => {
                return (
                  <div key={index} className="mb-5">
                    <BusStopCard
                      list={list}
                      setResult={handleSetResult}
                      key={index}
                    />
                  </div>
                );
              })}
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
