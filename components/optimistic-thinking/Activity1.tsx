import React, { useContext, useState } from "react";
import Image from "next/image";
import { SpotLightGame } from "./SpotLightGame";
import { ResultContext } from "@/context/ResultContext";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

const questions = [
  {
    id: 1,
    text: "1. You are determined",
    correctAns: "green",
  },
  {
    id: 2,
    text: "2. Great work!",
    correctAns: "green",
  },
  {
    id: 3,
    text: "3. I don’t need your help.",
    correctAns: "red",
  },
  {
    id: 4,
    text: "4. Could you please stop!.",
    correctAns: "red",
  },
  {
    id: 5,
    text: "5. Love your ideas.",
    correctAns: "red",
  },
  {
    id: 6,
    text: "6. Listen to me!",
    correctAns: "red",
  },
  {
    id: 7,
    text: "7. I don’t want to talk.",
    correctAns: "yellow",
  },
  {
    id: 8,
    text: "8. What’s going on?.",
    correctAns: "yellow",
  },
  {
    id: 9,
    text: "9. I don’t have time for this.",
    correctAns: "red",
  },
  {
    id: 10,
    text: "10. I am smarter than you.",
    correctAns: "red",
  },
];

export const Activity1 = ({ onNextClick, onBackClick }: Props) => {
  const resultContext = useContext(ResultContext);
  const { state } = resultContext;

  const handleSetResult = (r: boolean, id: string) => {
    resultContext.dispatch({
      type: "setResults",
      payload: [...(state?.results ?? []), { isCorrect: r, id: id }],
    });
  };

  return (
    <div className="w-full">
      <div className="px-10 py-5 h-[90px] bg-[#ECE0F5] shadow flex justify-between items-center">
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

      <div className="optimistic-thinking w-full h-full bg-[#82B77C] flex justify-center items-center">
        <div className="bg-[#FFFEE9] w-full max-w-[750px] rounded-[10px] shadow-xl p-6">
          {/* Instructions Section */}
          <div className="flex flex-col justify-center items-center mb-6">
            <h3 className="text-[#CA0077] text-xl">
              Instructions for Students:
            </h3>
            <h4 className="text-3xl">Optimistic Thinking</h4>
            <p className="text-[#3F3F46] text-base font-bold">It’s All Good</p>
          </div>
          <div className="flex flex-col text-center mb-7">
            <p className="text-sm tracking-wide leading-[28.8px]">
              Good communication skills is one way to help build healthy
              relationships. Read the sentences and choose the answer you think
              is best. When you are done, you can compare your choices with the
              answer sheet at the end of the activity.
            </p>
          </div>

          {/* Questions Section */}
          <div className="mt-7">
            <h3 className="text-base font-bold text-[#652D90] mb-3">
              Sentences to Evaluate:
            </h3>
            {/* <div className="bg-white shadow-md rounded-lg p-4">
              {questions.map((question, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex justify-between items-center py-2">
                    <div className="text-sm text-[#303030] font-medium">
                       {question.text}
                    </div>
                    <div className="flex gap-4">
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
                  {index < questions.length - 1 && (
                    <hr className="border-t border-gray-300" />
                  )}
                </div>
              ))}
            </div> */}

            <div className="bg-white shadow-md rounded-lg p-4">
              {questions.map((list, index) => {
                return (
                  <SpotLightGame
                    list={list}
                    setResult={handleSetResult}
                    key={index}
                  />
                );
              })}
            </div>
          </div>

          {/* Next Button */}
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
  );
};
