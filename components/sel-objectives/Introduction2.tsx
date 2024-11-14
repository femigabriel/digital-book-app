import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter
import { Modal } from "antd"; // Import Modal

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

export const Introduction2 = ({ onNextClick, onBackClick }: Props) => {
  const router = useRouter(); // Initialize useRouter

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
    <div className="w-full">
      <div className="px-10 py-5 h-[90px] activity-header shadow flex justify-between items-center">
        <div className="div">
          <button className=" w-full" onClick={onBackClick}>
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
          <button className=" w-full">
            <Image
              src="/images/Frame 110.svg"
              alt="more info"
              width={251}
              height={45}
              className="max-w-full h-auto"
              draggable="false"
            />
          </button>
        </div>
      </div>

      <div className="sel-obj !h-screen w-full">
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
                Social Emotional Learning:
              </h3>
              <p className="w-full text-sm mt-2 tracking-wide leading-[28.8px]">
                The following activities will support students with the
                integration of social emotional skills into knowledge and ideas.
              </p>
              <p className="w-full text-sm mt-2 tracking-wide leading-[28.8px]">
                · Thinking it through-Read a paragraph and then answer the
                questions that follow. <br />
                · Write the response on the lines provided. <br />
                · Use the information provided to choose the best answer. <br />
                · Paraphrase and express information in one’s own words.
                <br />
                · Determine the meaning of words and phrases that reinforce each
                Social Emotional Skill.
                <br />
              </p>
            </div>
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
