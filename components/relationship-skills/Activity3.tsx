import React, { useState } from "react";
import Image from "next/image";

const options = [
  {
    id: 0,
    number: "A.",
    text: "Whatever is going on, you will be alright.",
    correctAns: false,
  },
  {
    id: 1,
    number: "B.",
    text: "What’s wrong, why do you look like that?",
    correctAns: false,
  },
  {
    id: 2,
    number: "C.",
    text: "Let’s ignore her/look away.",
    correctAns: false,
  },
  { id: 3, number: "D.", text: "Helping", correctAns: true },
];

interface Props {
  onNextClick: (isCorrect: boolean) => any;
  onBackClick: () => any;
}

export const Activity3 = ({ onNextClick, onBackClick }: Props) => {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState(false);

  const handleOnClick = (answer: string) => {
    setSelected(answer);
    setError(false); // Reset error on new selection
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correctOption = options.find((option) => option.correctAns);

    if (selected === correctOption?.text) {
      onNextClick(true); // Pass `true` if the answer is correct
    } else {
      setError(true);
      onNextClick(false); // Pass `false` if the answer is incorrect
    }
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
      <div className="relationship-skill w-full h-screen bg-[#82B77C]">
        <div className="bg-[#FFFEE9] w-full max-w-[750px] rounded-[10px] shadow-xl">
          <form onSubmit={handleSubmit} className="px-5 py-5">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-[#CA0077] text-xl">Activity</h3>
              <h4 className="text-3xl">Charlie’s Choices</h4>
              <p className="text-[#3F3F46] text-base font-bold">
                Relationship Skills Rock!
              </p>
            </div>
            <div className="flex flex-col mt-7">
              <h3 className="text-base font-bold text-[#652D90]">
                Directions:
              </h3>
              <p className="text-sm my-2 mt-3 font-semibold">
                Read each sentence carefully and choose the best answer. Refer
                to Charlie’s choices and review the definitions.
              </p>
            </div>
            <div className="mt-3">
              <p className="text-sm">
                3. Charlie’s friend Mya had to run to catch the school bus. Her
                hair was not combed and her clothes were a mess. Mya looked very
                upset and began to cry. The other children were very mean to
                Mya. Charlie encouraged Mya and helped her fix her hair.
              </p>
              <div className="lg:flex flex-col mt-3">
                <span className="text-sm font-semibold mb-2">
                  Which Relationship Skill best fits her actions?
                </span>

                <div>
                  {options.map((option) => (
                    <div
                      key={option.id}
                      onClick={() => handleOnClick(option.text)}
                      className={`p-2 cursor-pointer ${
                        selected === option.text ? "bg-[#D1C4E9]" : "bg-inherit"
                      }`}
                    >
                      {option.number} {option.text}
                    </div>
                  ))}
                </div>
                {error && (
                  <div className="text-[#F13737] text-[0.750em] mt-2">
                    *Incorrect answer, please try again.
                  </div>
                )}
              </div>
            </div>
            <div className="mt-7">
              <button type="submit" className="bg-[#FAD8E3] w-full">
                <Image
                  src="/images/Button next.svg"
                  alt="Next button"
                  width={64}
                  height={64}
                  className="max-w-full w-full h-auto"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
