import React from "react";
import Image from "next/image";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

const triggerQuestions = [
  "Your friend tells you they don’t like what you’re wearing.",
  "You accidentally bump into someone in the hallway, and they yell at you.",
  "Someone calls you a mean nickname you don’t like.",
  "A classmate makes a joke that makes you feel uncomfortable.",
  "A teacher points out a mistake you made in front of the class.",
  "You’re left out of a group project by your classmates.",
  "A friend says they don’t want to play with you today.",
  "Someone laughs at you when you make a mistake in gym class.",
  "A sibling tells you to leave them alone when you try to talk to them.",
  "Someone ignores you when you say hello to them in the hallway.",
];

export const RecognizingTriggersActivity = ({
  onNextClick,
  onBackClick,
}: Props) => {
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
      <div className="sel-obj w-full h-screen bg-[#FFFEE9]">
        <div className="bg-[#FFFEE9] w-full max-w-[850px] rounded-[10px]  shadow-xl">
          {/* Header */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-[#CA0077] text-xl">
              Instructions for Students:
            </h3>
            <h4 className="text-3xl">SEL Objective</h4>
            <p className="text-[#3F3F46] text-base font-bold">
               5th Grade: Recognizing triggers
            </p>
          </div>
          <div className="px-10 ">
            {/* Lesson */}
            <section className=" p-4 mb-4">
              <h3 className="font-semibold">
                Lesson - Hot Words and Hurt Feelings:
              </h3>
              <p className="text-gray-700">
                Do you like hot and spicy treats? Many people love Hot Takis...
              </p>
            </section>
            {/* Directions */}
            <section className=" p-4 mb-4">
              <h3 className="font-semibold">Directions:</h3>
              <p className="text-gray-700">
                Use the Taki’s to show how helpful you think the word/words
                are...
              </p>
            </section>
            {/* Takis Image */}
            <div className="">
              <div className="flex justify-center mb-4">
                <Image
                  src="/images/image 234.svg"
                  alt="Contact Illustration"
                  width={390.82}
                  height={250}
                  className="max-w-[390.82px] w-full h-auto"
                />
              </div>
              <p className="text-center mt-2">
                It’s Taki time, circle the best answer.
              </p>
            </div>
            {/* Statements List */}
            <div className="space-y-4 mb-4">
              {triggerQuestions.map((question, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <p className="flex-1 text-gray-800">
                    {index + 1}. {question}
                  </p>
                  <div className="flex space-x-2">
                    <button className="bg-green-500 text-white px-4 py-1 rounded-full">
                      ✓
                    </button>
                    <button className="bg-red-500 text-white px-4 py-1 rounded-full">
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* Submit Button */}
            <div className="mt-7 flex justify-center w-full items-center">
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

export default RecognizingTriggersActivity;
