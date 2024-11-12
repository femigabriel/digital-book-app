import React, { useContext, useState } from "react";
import Image from "next/image";
import { Radio, Button, Descriptions } from "antd"; // Import Radio and Button from Ant Design
import { BusStopCard } from "./BusStopCard";
import { ResultContext } from "@/context/ResultContext";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

const questions = [
  {
    id: 1,
    busNumber: 1,
    content: "Cooperation",
    Descriptions: "Working together to achieve a common goal.",
    correctAns: "true",
  },
  {
    id: 2,
    busNumber: 2,
    content: "Not compromising",
    Descriptions: "Treating others with kindness and consideration..",
    correctAns: "true",
  },
  {
    id: 3,
    busNumber: 3,
    content: "Being respectful",
    Descriptions: "Always wanting to argue or disagree..",
    correctAns: "true",
  },
  {
    id: 4,
    busNumber: 4,
    content: "Not listening",
    Descriptions: "Someone who often complains about things.",
    correctAns: "false",
  },
  {
    id: 5,
    busNumber: 5,
    content: "Encouragement",
    Descriptions: "Offering support or confidence to someone.",
    correctAns: "true",
  },
];
export const BusStop1 = ({ onNextClick, onBackClick }: Props) => {
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
      <div className="px-10 py-5 h-[90px] gradient-border shadow flex justify-between items-center">
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
