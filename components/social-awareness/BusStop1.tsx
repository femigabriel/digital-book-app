import React, { useState } from "react";
import Image from "next/image";
import { Radio, Button, Descriptions } from "antd"; // Import Radio and Button from Ant Design

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

export const BusStop1 = ({ onNextClick, onBackClick }: Props) => {
  const questions = [
    ,
    {
      id: 1,
      title: "1. Cooperation",
      Descriptions: "Working together to achieve a common goal.",
    },
    {
      id: 2,
      title: "2. Respectful",
      Descriptions: "Treating others with kindness and consideration..",
    },
    {
      id: 3,
      title: "3. Argumentative",
      Descriptions: "Always wanting to argue or disagree..",
    },
    {
      id: 4,
      title: "4. Complainer",
      Descriptions: "Someone who often complains about things.",
    },
    {
      id: 5,
      title: "5. Encouraging",
      Descriptions: "Offering support or confidence to someone.",
    },
  ];

  // State to hold answers
  const [answers, setAnswers] = useState<string[]>(
    Array(questions.length).fill("")
  );

  // Handle radio change
  const handleRadioChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value; // Update the answer for the question index
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    console.log(answers); // Handle submit logic here (e.g., moving to the next activity)
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
              {questions.map((question, index) => (
                <div key={index} className="mb-4">
                  <div className="mb-3">
                    <h3 className="text-[#652D90] font-semibold text-base">
                      {question?.title}
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
