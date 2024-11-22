import React, { useState } from "react";
import Image from "next/image";
import { Radio } from "antd";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
  selectedWord: string | null;
}

export const Activity2 = ({
  onNextClick,
  onBackClick,
  selectedWord,
}: Props) => {
  return (
    <div className="w-full bg-[#FFFEE9]">
      <div className="px-10 py-5 h-[90px] bg-[#FFFEE9] gradient-border shadow flex justify-between items-center">
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
      <div className="self-awareness w-full !h-screen bg-[#FFFEE9]">
        <div className="bg-[#FFFEE9] w-full max-w-[750px] rounded-[10px] shadow-xl">
          <div className="px-5 py-5">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-[#CA0077] text-xl">Activity</h3>
              <h4 className="text-3xl">Self-Awareness</h4>
              <p className="text-[#3F3F46] text-base font-bold">
                Extraordinary Me!
              </p>
            </div>
            <div className="mt-7">
              <h3 className="text-base font-bold text-[#652D90]">
                Directions:
              </h3>
              <p className="w-full text-sm mt-2 tracking-wide leading-[28.8px]">
                Use the word in a sentence starting with I am.
              </p>
            </div>

            <div className="mt-7">
              <p className="text-sm flex gap-2">
                <span className="font-bold">Your Word:</span>
                {selectedWord ? selectedWord : "No word selected"}
              </p>
              <div className="lg:flex gap-3 w-full mt-3 items-center">
                <span className="text-sm font-semibold mt-5">Sentence:</span>
                <div className="flex flex-col w-full">
                  <input
                    type="text"
                    className="input-field bg-inherit px-5 max-w-[450px]"
                  />
                </div>
              </div>
            </div>
            <div className="mt-7">
              <button className="bg-[#FAD8E3] w-full" 
              onClick={onNextClick
                
              }>
                <Image
                  src="/images/Action Btn.svg"
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
