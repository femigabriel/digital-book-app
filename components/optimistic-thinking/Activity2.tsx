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
    text: "11. We can work on the projext together",
    correctAns: "green",
  },
  {
    id: 2,
    text: "12. Why should i listen to you!",
    correctAns: "red",
  },
  {
    id: 3,
    text: "13. Did i ask for help?",
    correctAns: "yellow",
  },
  {
    id: 4,
    text: "14. I work better alone.",
    correctAns: "yellow",
  },
  {
    id: 5,
    text: "15. The teacher calls on me because I'm smart",
    correctAns: "red",
  },
  {
    id: 6,
    text: "16. I can help you like",
    correctAns: "red",
  },
  {
    id: 7,
    text: "17. I am proud to be your friend",
    correctAns: "red",
  },
  {
    id: 8,
    text: "18. Are you really going to wear that?",
    correctAns: "yellow",
  },
  {
    id: 9,
    text: "19. Why should anyone hang out with her?",
    correctAns: "red",
  },
  {
    id: 10,
    text: "20. I can't wait to get home. You're so boring",
    correctAns: "red",
  },
];

export const Activity2 = ({ onNextClick, onBackClick }: Props) => {
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
            <h3 className="text-[#CA0077] text-xl">Instructions for Students:</h3>
            <h4 className="text-3xl">Optimistic Thinking</h4>
            <p className="text-[#3F3F46] text-base font-bold">It’s All Good</p>
          </div>
          <div className="flex flex-col text-center mb-7">
            <p className="text-sm tracking-wide leading-[28.8px]">
              Good communication skills is one way to help build healthy relationships.
              Read the sentences and choose the answer you think is best.
              When you are done, you can compare your choices with the answer sheet at the end of the activity.
            </p>
          </div>

          {/* Questions Section */}
          <div className="mt-7">
            <h3 className="text-base font-bold text-[#652D90] mb-3">Sentences to Evaluate:</h3>
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
