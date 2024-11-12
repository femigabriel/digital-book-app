import React from "react";
import { Radio } from "antd";

interface SelfManagementCardProps {
  question: {
    id: number;
    question: string;
    color: string;
    bg: string;
  };
  index: number;
  selectedValue: number | null;
  onSelect: (value: number) => void;
}

export const SelfManagementCard: React.FC<SelfManagementCardProps> = ({
  question,
  index,
  selectedValue,
  onSelect,
}) => {
  const isSelected = selectedValue === index + 1;

  return (
    <div
      key={index}
      className={`flex gap-3 w-full mb-5 cursor-pointer " : ""}`}
      onClick={() => onSelect(index + 1)}
    >
      <div
        className="px-5 py-5 w-[47px] h-[114px] flex items-center justify-center border-4 rounded-md"
        style={{ backgroundColor: question.bg, borderColor: question.color }}
      >
        <span>{index + 1}.</span>
      </div>
      <div
        className="flex-col w-full p-2 h-[114px] border-4 rounded-md"
        style={{ backgroundColor: question.bg, borderColor: question.color }}
      >
        <p className="text-base text-[#303030]">{question.question}</p>
        <Radio.Group  className="mt-3">
          <Radio value="Yes">Yes</Radio>
          <Radio value="No">No</Radio>
        </Radio.Group>
      </div>
    </div>
  );
};
