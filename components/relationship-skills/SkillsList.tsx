import React from "react";
import Image from "next/image";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

export const SkillsList = ({ onNextClick, onBackClick }: Props) => {
  return (
    <div className="w-full">
      <div className="px-10 py-5 h-[90px] bg-[#ECE0F5] shadow flex justify-between items-center">
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
      <div className="relationship-skill w-full h-screen bg-[#ECE0F5]">
        <div className=" bg-[#ECE0F5] w-full max-w-[750px] rounded-[10px] shadow-xl ">
          <div className="px-5 py-5">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-[#CA0077] text-xl">
                Relationship Skills List
              </h3>
              <h4 className="text-3xl">Charlie’s Choices</h4>
              <p className="text-[#3F3F46] text-base font-bold">
                Relationship Skills Rock!
              </p>
            </div>
            <div className="flex flex-col mt-7">
              <h3 className="text-base font-bold text-[#652D90]">
                Reflection:
              </h3>
              <p className="text-sm my-2 mt-3">
                <span className="font-semibold">Showing Empathy: </span>Charlie
                really cares about how people feel. She tries to understand what
                they are going through.
              </p>
              <p className="text-sm my-2">
                <span className="font-semibold">Helping: </span>Charlie When
                Charlie sees that someone is feeling bad, she tries to help them
                feel better.
              </p>
              <p className="text-sm my-2">
                <span className="font-semibold">Respecting Everyone: </span>
                Charlie believes everyone deserves respect. She treats everyone
                like they are special.
              </p>
              <p className="text-sm my-2">
                <span className="font-semibold">Sharing Feelings: </span>Charlie
                is not afraid to share how she feels. She tells her friends and
                family what’s in her heart.
              </p>
              <p className="text-sm my-2">
                <span className="font-semibold">Being a Good Listener: </span>
                Charlie listens carefully. She pays attention to how people look
                and sound when they talk.
              </p>
              <p className="text-sm my-2">
                <span className="font-semibold">Communicating Well: </span>
                Charlie is careful about choosing words. She wants others to
                truly understand what she means.
              </p>
              <p className="text-sm my-2">
                <span className="font-semibold">Standing Strong: </span>They
                don’t give in to peer pressure and stay true to themselves.
              </p>
              <p className="text-sm my-2">
                <span className="font-semibold">Working Together: </span>They
                join forces to get things done as a team.
              </p>
            </div>

            <div className="mt-7 ">
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
