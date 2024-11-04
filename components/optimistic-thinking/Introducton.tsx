import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter
import { Modal } from "antd"; // Import Modal

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

export const Introducton = ({ onNextClick, onBackClick }: Props) => {
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

      <div className="optimistic-thinking w-full h-full bg-[#82B77C]">
        <div className="bg-[#FFFEE9] w-full max-w-[750px] flex justify-center rounded-[10px] shadow-xl items-center">
          <div className="px-5 py-5">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-[#CA0077] text-xl">
                Instructions for Students:
              </h3>
              <h4 className="text-3xl">Optimistic Thinking</h4>
              <p className="text-[#3F3F46] text-base font-bold">
                 It’s All Good
              </p>
            </div>
            <div className="flex flex-col mt-7 justify-center">
              <p className="w-full max-w-[30em] text-sm mt-5 tracking-wide leading-[28.8px]">
                The school bus driver is responsible for the safety of all
                children.The driver has to follow all the traffic rules.It’s
                important to know what each color on the traffic light means.
              </p>
              <div className="flex flex-col space-y-3 mt-5">
                <h3 className="text-sm text-[#303030] flex gap-2">
                  <span className="text-[#17C964] font-bold">
                    Green Button:
                  </span>
                  Correct
                </h3>
                <h3 className="text-sm text-[#303030] flex gap-2">
                  <span className="text-[#D8CE00] font-bold">
                    Yellow Button:
                  </span>
                  Still thinking
                </h3>
                <h3 className="text-sm text-[#303030] flex gap-2">
                  <span className="text-[#F31260] font-bold">Red Button:</span>
                  Wrong
                </h3>
              </div>
            </div>
            <div className="mt-7">
              <h3 className="text-base font-bold text-[#652D90]">
                Directions:
              </h3>
              <p className="max-w-[34em] w-full text-sm mt-2 tracking-wide leading-[28.8px]">
                Look at the sentences on the next page. For each sentence, click
                on the colored button that best represents your answer:
              </p>
              <h3 className="text-sm text-[#303030] flex gap-2 mt-5">
                <span className="text-[#652D90] text-base font-bold">
                  Hint:
                </span>
                Think about what makes Charlie a good communicator!
              </h3>
              <h3 className="text-base text-[#652D90] font-bold flex gap-2 mt-5">
                Reminder about Traffic Light Colors:
              </h3>
            </div>
            <div className="mt-5">
              <div className="flex justify-center items-center">
                <Image
                  src="/images/spotlight.svg"
                  alt="Contact Illustration"
                  width={174}
                  height={169}
                  className="w-full max-w-[174px] h-auto"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-3 mt-5">
              <h3 className="text-sm text-[#303030] flex gap-2">
                <span className="text-[#17C964] font-bold">Green:</span>
                Go or proceed.
              </h3>
              <h3 className="text-sm text-[#303030] flex gap-2">
                <span className="text-[#D8CE00] font-bold">Yellow:</span>
                Caution or think before you proceed.{" "}
              </h3>
              <h3 className="text-sm text-[#303030] flex gap-2">
                <span className="text-[#F31260] font-bold">Red:</span>
                Stop or don’t go any further.
              </h3>
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
