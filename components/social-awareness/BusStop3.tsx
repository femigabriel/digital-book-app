import React, { useState } from "react";
import Image from "next/image";
import { Radio } from "antd";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

export const BusStop3 = ({ onNextClick, onBackClick }: Props) => {
    // Define the questions
  const questions = [
    {
      id: 11,
      title: "11. Appreciation",
      Descriptions: "Recognizing and valuing the good things.",
    },
    {
      id: 12,
      title: "12. Sharing",
      Descriptions: "Giving a portion of what you have to others.",
    },
    {
      id: 13,
      title: "13. Friendly",
      Descriptions: "Being kind and pleasant to others.",
    },
    {
      id: 14,
      title: "14. Pushy",
      Descriptions: "Trying to force others to do something.",
    },
    {
      id: 15,
      title: "15. Bossy",
      Descriptions: "Telling others what to do in a domineering way.",
    },
  ];

  // State to hold answers
  const [answers, setAnswers] = useState<string[]>(
    Array(questions.length).fill("")
  );

  // Handle radio change
  const handleRadioChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    console.log(answers);
  };

  return (
    <div className="w-full">
      <div className="px-10 py-5 h-[90px] bg-[#ECE0F5] shadow flex justify-between items-center">
        <div className="div">
          <button className="w-full"  onClick={onBackClick}>
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
              {questions.map((question, index) => (
                <div key={index} className="mb-4">
                  <div className="mb-3">
                    <h3 className="text-[#652D90] font-semibold text-base">
                      {question.title}
                    </h3>
                    <h5 className="text-sm text-[#3F3F46]">Definition:</h5>
                  </div>
                  <p className="text-base">{question?.Descriptions}</p>
                  <div className="flex gap-3">
                    <span className="text-sm text-[#303030] font-semibold">
                      Should we get off?
                    </span>
                    <Radio.Group
                      onChange={(e) => handleRadioChange(index, e.target.value)}
                      value={answers[index]}
                    >
                      <Radio value="Yes">Yes</Radio>
                      <Radio value="No">No</Radio>
                    </Radio.Group>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7">
              <button className="bg-[#FAD8E3] w-full"
              onClick={onNextClick}
              >
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
