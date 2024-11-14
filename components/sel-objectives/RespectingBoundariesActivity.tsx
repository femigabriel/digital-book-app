import React from "react";
import Image from "next/image";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

const boundariesQuestions = [
  "Someone keeps taking your things without asking.",
  "A friend continues to play a game you don't like, even when you ask them to stop.",
  "A classmate moves too close to you while talking, making you uncomfortable.",
  "Someone makes fun of you when you don’t want to share something personal.",
  "A peer interrupts you constantly when you’re trying to speak.",
  "Your sibling reads your messages without asking.",
  "A friend teases you about something that bothers you after you've asked them to stop.",
  "Someone ignores your request to not touch your belongings.",
  "A person repeatedly asks you personal questions that you don't want to answer.",
  "A friend comes over to your home uninvited and stays for a long time.",
];

export const RespectingBoundariesActivity = ({
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
              4th Grade: Respecting Boundaries
            </p>
          </div>

          {/* Lesson */}
          <div className="px-10 ">
            <section className="mb-4">
              <h3 className="text-base font-bold text-[#652D90]">
                Lesson - Don’t Cross the Line:
              </h3>
              <p className=" w-full text-sm mt-2 tracking-wide leading-[28.8px]">
                It is important to listen to people, look at their faces and
                watch their body language. Paying attention to these three
                responses gives us an idea of what they are feeling. This will
                show that we care and that we are mindful of their thoughts,
                ideas and personal space.e...
              </p>
            </section>

            {/* Directions */}
            <section className="mb-4">
              <h3 className="text-base font-bold text-[#652D90]">
                Directions:
              </h3>
              <p className="text-gray-700">
                Look at the phrases below. Circle STOP if the statement is not
                respectful of boundaries. Circle GO if the statement is
                respectful of boundaries.
              </p>
            </section>

            {/* Statements List */}
            <div className="space-y-4 mb-4">
              {boundariesQuestions.map((question, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <p className="flex-1 text-gray-800">
                    {index + 1}. {question}
                  </p>
                  <div className="flex space-x-2">
                    <button className="bg-red-500 text-white px-4 py-1 rounded-full">
                      Stop
                    </button>
                    <button className="bg-green-500 text-white px-4 py-1 rounded-full">
                      Go
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Next Button */}
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

export default RespectingBoundariesActivity;
