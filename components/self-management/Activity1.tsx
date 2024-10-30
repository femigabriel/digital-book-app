import React, { useState } from "react";
import Image from "next/image";
import { Radio, Button, Descriptions } from "antd"; // Import Radio and Button from Ant Design

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

export const SelfManagement = ({ onNextClick, onBackClick }: Props) => {
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
    <div className="w-full bg-[#ECE0F5]">
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
      <div className="good-decision w-full h-screen bg-[#ECE0F5]">
        <div className="bg-[#ECE0F5] w-full max-w-[750px] rounded-[10px] shadow-xl">
          <div className="px-5 py-5">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-[#CA0077] text-xl">Activity</h3>
              <h4 className="text-3xl">Self Management</h4>
              <p className="text-[#3F3F46] text-base font-bold">
                I am in Control
              </p>
            </div>
            <div className="mt-7">
              <h3 className="text-base font-bold text-[#652D90]">
                Directions:
              </h3>
              <p className=" w-full text-sm mt-2 tracking-wide leading-[28.8px]">
                Read each sentence carefully and choose the one that shows the
                best example of self-management. Self-management is when someone
                is in control of their feelings, actions, and behaviors, even
                when things might be difficult or challenging.
              </p>
            </div>
            {/* Questions and Radio Inputs */}

            <div className="mt-7">
              <h3 className="text-base font-bold ">Answer Choices:</h3>

              <div className="mt-5">
                <div className="flex w-full mb-5">
                  <Radio value=""></Radio>
                  <p className="flex gap-2">
                    <span>1.</span>Charlie said, "That's what friends are for."
                  </p>
                </div>
                <div className="flex w-full mb-5">
                  <Radio value=""></Radio>
                  <p className="flex gap-2">
                    <span>2.</span>"Thank you for everything," Mya said.
                  </p>
                </div>
                <div className="flex w-full mb-5">
                  <Radio value=""></Radio>
                  <p className="flex gap-2">
                    <span>3.</span>"Our moms are not going to be happy," Charlie
                    said.
                  </p>
                </div>
                <div className="flex w-full mb-5">
                  <Radio value=""></Radio>
                  <p className="flex gap-2">
                    <span>4.</span>Charlie told Mya, "We will catch the bus."
                  </p>
                </div>
                <div className="flex w-full mb-5">
                  <Radio value=""></Radio>
                  <p className="flex gap-2">
                    <span>5.</span>The girls headed toward a big building.
                  </p>
                </div>
                <div className="flex w-full mb-5">
                  <Radio value=""></Radio>
                  <p className="flex gap-2">
                    <span>6.</span>Charlie stayed calm and spoke with confidence
                    to answer Mya's question.
                  </p>
                </div>
                <div className="flex w-full mb-5">
                  <Radio value=""></Radio>
                  <p className="flex gap-2">
                    <span>7.</span>"Will we get in trouble?" Mya asked.
                  </p>
                </div>
                <div className="flex w-full mb-5">
                  <Radio value=""></Radio>
                  <p className="flex gap-2">
                    <span>8.</span>Mya cried whenever she thought about her dad.
                  </p>
                </div>
                <div className="flex w-full mb-5">
                  <Radio value=""></Radio>
                  <p className="flex gap-2">
                    <span>9.</span>Mya and Charlie decided to help Mr. Martinez.
                  </p>
                </div>
              </div>
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
