import React, { useState } from "react";
import Image from "next/image";
import { Radio } from "antd";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

const questions = [
  "Charlie said, 'That's what friends are for.'",
  '"Thank you for everything," Mya said.',
  '"Our moms are not going to be happy," Charlie said.',
  'Charlie told Mya, "We will catch the bus."',
  "The girls headed toward a big building.",
  "Charlie stayed calm and spoke with confidence to answer Mya's question.",
  '"Will we get in trouble?" Mya asked.',
  "Mya cried whenever she thought about her dad.",
  "Mya and Charlie decided to help Mr. Martinez.",
];

export const Activity1 = ({ onNextClick, onBackClick }: Props) => {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  const handleSelect = (value: number) => {
    setSelectedValue(value);
  };

  return (
    <div className="w-full bg-[#ECE0F5]">
      <div className="px-10 py-5 h-[90px] bg-[#ECE0F5] shadow flex justify-between items-center">
        <div>
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
        <div>
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
      <div className="self-management w-full h-screen bg-[#ECE0F5]">
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
              <h3 className="text-base font-bold text-[#652D90]">Directions:</h3>
              <p className="w-full text-sm mt-2 tracking-wide leading-[28.8px]">
                Read each sentence carefully and choose the one that shows the
                best example of self-management. Self-management is when someone
                is in control of their feelings, actions, and behaviors, even
                when things might be difficult or challenging.
              </p>
            </div>

            <div className="mt-7">
              <h3 className="text-base font-bold">Answer Choices:</h3>
              <div className="mt-5">
                {questions.map((question, index) => (
                  <div
                    key={index}
                    className={`flex w-full mb-5 p-2 cursor-pointer rounded-lg ${
                      selectedValue === index + 1 ? "bg-[#ED008C] text-white" : ""
                    }`}
                    onClick={() => handleSelect(index + 1)}
                  >
                    <Radio
                      checked={selectedValue === index + 1}
                      onChange={() => handleSelect(index + 1)}
                    />
                    <p className="flex gap-2">
                      <span>{index + 1}.</span> {question}
                    </p>
                  </div>
                ))}
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
