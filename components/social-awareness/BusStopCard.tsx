import { Radio } from "antd";
import React, { useState } from "react";

interface Props {
  content?: string;
  busNumber: string;
}

export const BusStopCard = ({ list, setResult }: any) => {
  const [active, setActive] = useState("");

  const handleClick = (e: any) => {
    setActive(e);
    setResult(list.correctAns == e, list.id);

  };

  const [answers, setAnswers] = useState<string[]>(
    Array(list.length).fill("")
  );

  // Handle radio change
  const handleRadioChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
    
  };

    // Handle radio change
    // const handleClick = (index: number, value: string, e: any) => {
    //   const newAnswers = [...answers];
    //   newAnswers[index] = value;
    //   setAnswers(newAnswers);
    //   setActive(e);
    //   setResult(list.correctAns == e, list.id);
    // };


  return (
    <div>
      <div className="mt-7">
        <div className="mb-4">
          <div className="mb-3">
            <h3 className="text-[#652D90] font-semibold text-base">
              {list?.content}
            </h3>
            <h5 className="text-sm text-[#3F3F46]">Definition:</h5>
          </div>
          <p className="text-base">
            <span>{list.busNumber}.</span> {list?.Descriptions}
          </p>
          <div className="flex gap-3">
            <span className="text-sm text-[#303030] font-semibold">
              Should we get off?
            </span>
            <Radio.Group
              // onChange={(e) => handleRadioChange(index, e.target.value)}
              // value={list[index]}
              onChange={(e) => handleClick("true")}
            >
              <Radio value="Yes">Yes</Radio>
              <Radio value="No">No</Radio>
            </Radio.Group>
          </div>
        </div>
      </div>
    </div>
  );
};
