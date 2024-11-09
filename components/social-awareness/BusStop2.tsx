import React, { useContext, useState } from "react";
import Image from "next/image";
import { Radio } from "antd";
import { ResultContext } from "@/context/ResultContext";
import { BusStopCard } from "./BusStopCard";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

const questions = [
  {
    id: 6,
    busNumber: 6,
    content: " Concerned",
    Descriptions: "Showing worry or care for someone or something.",
    correctAns: "true",
  },
  {
    id: 7,
    busNumber: 7,
    content: " Selfish",
    Descriptions: "Thinking only about oneself and not considering others.",
    correctAns: "false",
  },
  {
    id: 8,
    busNumber: 8,
    content: "Helpful",
    Descriptions: "Willing to assist others.",
    correctAns: "false",
  },
  {
    id: 9,
    busNumber: 9,
    content: "Caring",
    Descriptions: "Showing kindness and concern for others.",
    correctAns: "true",
  },
  {
    id: 10,
    busNumber: 10,
    content: "Grumbler",
    Descriptions: "Someone who often complains in a low voice.",
    correctAns: "true",
  },
];
export const BusStop2 = ({ onNextClick, onBackClick }: Props) => {
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
