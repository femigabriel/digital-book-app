import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter
import { Modal } from "antd"; // Import Modal

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

// export const Introducton = ({ onNextClick, onBackClick }: Props) => {
export const Introducton = () => {
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
      <div className="px-10 py-5 h-[90px] bg-[#ECE0F5] shadow flex justify-between items-center">
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

      <div className="bus-stop w-full h-screen bg-[#ECE0F5]">
        <div className="bg-[#ECE0F5] w-full max-w-[750px] flex justify-center rounded-[10px] shadow-xl items-center">
          <div className="px-5 py-5">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-[#CA0077] text-xl">
                Instructions for Students:
              </h3>
              <h4 className="text-3xl">Bus Stop Bop</h4>
              <p className="text-[#3F3F46] text-base font-bold">
                Social Awareness!
              </p>
            </div>
            <div className="flex flex-col mt-7 justify-center">
              <p className="w-full text-sm mt-5 tracking-wide leading-[28.8px]">
                Read the story carefully. Charlie and Mya take the bus downtown
                to see Mya’s dad. As they travel, they pass different bus stops
                with important words related to social-emotional learning (SEL).
                Your task is to decide whether to get off at each bus stop by
                clicking on the bus stop sign. Each correct choice is worth 1
                point. Let’s ride!
              </p>
            </div>
            <div className="mt-7">
              <h3 className="text-base font-bold text-[#652D90]">Story:</h3>
              <p className="max-w-[34em] w-full text-sm mt-2 tracking-wide leading-[28.8px]">
                Charlie and Mya caught the city bus downtown to see Mya’s dad,
                who was taken away because he could not prove that he is an
                American citizen. On the way downtown, they passed many bus
                stops. Each bus stop had the name of a street on it. Think
                positive and get off at the right stop!
              </p>
            </div>
            <div className="mt-7 flex justify-center w-full items-center">
              <button
                className="bg-[#FAD8E3] w-full"
                // onClick={onNextClick}
              >
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
