import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter
import { Divider, Modal } from "antd"; // Import Modal

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

export const Introducton = ({ onNextClick, onBackClick }: Props) => {
  const router = useRouter();

  const handleQuit = () => {
    Modal.confirm({
      title: "Are you sure you want to quit?",
      content: "You will lose your progress if you leave this page.",
      okText: "Yes, I’m sure!",
      cancelText: "No, I want to stay!",
      onOk: () => {
        router.push("/student-dashboard");
      },
      onCancel: () => {
        // Do nothing on cancel
      },
    });
  };

  return (
    <div className="w-full ">
      <div className="px-10 py-5 h-[90px] gradient-border shadow flex justify-between items-center">
        <div className="div">
          <button className="w-full" onClick={handleQuit}>
            <Image
              src="/assets/icons/quitIcon.svg"
              alt="Quit"
              width={80}
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

      <div className="sel-obj w-full">
        <div className="bg-[#FFFEE9] w-full max-w-[750px] flex justify-center rounded-[10px] shadow-xl items-center">
          <div className="px-5 py-5">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-[#CA0077] text-xl">
                Instructions for Students:
              </h3>
              <h4 className="text-3xl">SEL Objective</h4>
              <p className="text-[#3F3F46] text-base font-bold">
                Social Emotional Learning
              </p>
              <p className="text-[#303030] text-sm text-center">
                To provide intentional and consistent strategies that support
                the practice of Social Emotional Development.
              </p>
            </div>

            <div className="mt-7">
              <h3 className="text-base font-bold text-[#652D90]">
                Areas of Concentration:
              </h3>
              <div className="mt-7">
                <h4 className="text-[#3F3F46] text-sm font-bold">
                  Third Grade
                </h4>
                <p className=" w-full text-sm mt-2 tracking-wide leading-[28.8px]">
                  Empathy and Understanding
                  <br />
                  What does that even mean? (Communication)
                  <br />
                  Encourage acts of kindness
                </p>
                <Divider className="mt-5" />
              </div>

              <div className="mt-3">
                <h4 className="text-[#3F3F46] text-sm font-bold">
                  Fourth Grade
                </h4>
                <p className=" w-full text-sm mt-2 tracking-wide leading-[28.8px]">
                  Respecting boundaries
                  <br />
                  Cooperation
                  <br />
                  Name that feeling
                </p>
                <Divider className="mt-5" />
              </div>

              <div className="mt-3">
                <h4 className="text-[#3F3F46] text-sm font-bold">
                  Fifth Grade
                </h4>
                <p className=" w-full text-sm mt-2 tracking-wide leading-[28.8px]">
                  Recognizing Triggers
                  <br />
                  Positive Self-image
                  <br />
                  Words that build or break
                </p>
                <Divider className="mt-5" />
              </div>
            </div>
            <div className="mt-7 flex justify-center w-full items-center">
              <button className="bg-[#FAD8E3] w-full" onClick={onNextClick}>
                <Image
                  src="/images/Button Wrapper.svg"
                  alt="Contact Illustration"
                  width={516}
                  height={59}
                  className="w-full h-auto"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
