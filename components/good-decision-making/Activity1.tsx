import React, { useState } from "react";
import Image from "next/image";
import { Radio, Button, Descriptions } from "antd"; // Import Radio and Button from Ant Design

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

export const Activity1 = ({ onNextClick, onBackClick }: Props) => {
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
              <h4 className="text-3xl">Good Decision Making</h4>
              <p className="text-[#3F3F46] text-base font-bold">
                Think About It
              </p>
            </div>
            <div className="mt-7">
              <h3 className="text-base font-bold text-[#652D90]">
                Directions:
              </h3>
              <p className=" w-full text-sm mt-2 tracking-wide leading-[28.8px]">
                After reading the passage decide on the best answer. Choose from
                the list below.   
              </p>
            </div>
            {/* Questions and Radio Inputs */}

            <div className="mt-7">
              <h3 className="text-base font-bold ">Answer Choices:</h3>
              <div className="mt-5">
                <div className="flex w-full mb-5">
                  <Radio value=""></Radio>
                  <p className="flex gap-2">
                    <span>a.</span>Wait on someone else to help.
                  </p>
                </div>
                <div className="flex w-full mb-5">
                  <Radio value=""></Radio>
                  <p className="flex gap-2">
                    <span>b.</span>Call a family member to complain about his
                    problem.
                  </p>
                </div>
                <div className="flex w-full mb-5">
                  <Radio value=""></Radio>
                  <p className="flex gap-2">
                    <span>c.</span>Stay quiet and hope that he will be sent
                    home. said.
                  </p>
                </div>
                <div className="flex w-full mb-5">
                  <Radio value=""></Radio>
                  <p className="flex gap-2">
                    <span>d.</span>Thank Cindy and say yes to her support.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <p className=" w-full text-sm mt-2 tracking-wide leading-[28.8px]">
                Copy the answer you chose on the lines below.
              </p>
              <input
                type="text"
                className="input-field bg-inherit px-5 w-full max-w-[500px]"
              />
            </div>
            <div className="mt-7">
              <p className=" w-full text-sm mt-2 tracking-wide leading-[28.8px]">
                Copy the answer you chose on the lines below.
              </p>
              <div className="flex flex-col mb-5">
                <div className="flex w-full gap-2 mb-5">
                  <h3 className=" text-[#303030] mt-2 font-bold ">Yes!</h3>
                  <div className="w-full">
                    <input
                      type="text"
                      className="input-field bg-inherit px-5 w-full max-w-[500px]"
                    />
                  </div>
                </div>

                <div className="flex w-full gap-2">
                  <h3 className=" text-[#303030] font-bold mt-2">No!</h3>
                  <div className="w-full">
                    <input
                      type="text"
                      className="input-field bg-inherit px-5 w-full max-w-[500px]"
                    />
                  </div>
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
