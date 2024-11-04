import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter
import { Modal } from 'antd'; // Import Modal

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

export const Introducton = ({ onNextClick, onBackClick }: Props) => {
  const router = useRouter(); // Initialize useRouter

  const handleQuit = () => {
    Modal.confirm({
      title: 'Are you sure you want to quit?',
      content: 'You will lose your progress if you leave this page.',
      okText: 'Yes, I’m sure!',
      cancelText: 'No, I want to stay!',
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

      <div className="relationship-skill w-full h-screen bg-[#82B77C]">
        <div className="bg-[#FFFEE9] w-full max-w-[750px] flex justify-center rounded-[10px] shadow-xl items-center">
          <div className="px-5 py-5">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-[#CA0077] text-xl">Introduction</h3>
              <h4 className="text-3xl">Charlie’s Choices</h4>
              <p className="text-[#3F3F46] text-base font-bold">
                Relationship Skills Rock!
              </p>
            </div>
            <div className="flex flex-col mt-7 justify-center">
              <p className="w-full text-sm mt-5 tracking-wide leading-[28.8px]">
                Charlie cares about other people and how they feel. She doesn’t
                like it when people are hurt or upset. When she notices that a
                person feels bad, she tries to help. Charlie believes that
                everyone deserves respect: Charlie has good Relationship Skills.
                Charlie is able to tell her family and her friends how she
                feels. She also listens to what they have to say. She’s really
                great at communicating. We can learn about good Relationship
                Skills as we read Charlie’s Big Gift.
              </p>
            </div>
            <div className="mt-7">
              <h3 className="text-base font-bold text-[#652D90]">
                Directions:
              </h3>
              <p className="max-w-[34em] w-full text-sm mt-2 tracking-wide leading-[28.8px]">
                Study the list of Relationship Skills that Charlie and her
                friends show each other. Read each of the sentences carefully.
                Choose the best answer from the list to fill in the blank.
              </p>
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
