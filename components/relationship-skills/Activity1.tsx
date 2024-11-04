import React, { useState } from "react";
import Image from "next/image";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

export const Activity1 = ({ onNextClick, onBackClick }: Props) => {
  const [firstAns, setfirstAns] = useState("");
  const [errorFirst, setErrorFirst] = useState(false);
  const [isCorrectFirst, setIsCorrectFirst] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const answer = e.target.value;
    setfirstAns(answer);
    setErrorFirst(false); // Reset error display on input change
    setIsCorrectFirst(false); // Reset correct display on input change
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Check if answer is correct
    if (firstAns.toLowerCase() === "showing empathy") {
      setErrorFirst(false);
      setIsCorrectFirst(true);
      onNextClick(); // Only advance if the answer is correct
    } else {
      setErrorFirst(true);
      setIsCorrectFirst(false);
    }
  };

  return (
    <div className="w-full">
    <div className="px-10 py-5 h-[90px] activity-header shadow flex justify-between items-center">
     <div className="div">
       <button className=" w-full" 
       onClick={onBackClick}
       >
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
        <div className="px-5 py-5">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-[#CA0077] text-xl">Activity</h3>
            <h4 className="text-3xl">Charlie’s Choices</h4>
            <p className="text-[#3F3F46] text-base font-bold">
              Relationship Skills Rock!
            </p>
          </div>
          <div className="flex flex-col mt-7">
            <h3 className="text-base font-bold text-[#652D90]">Directions:</h3>
            <p className="text-sm my-2 mt-3 font-semibold">
              Read each sentence carefully and choose the best answer. Refer to
              Charlie’s choices and review the definitions.
            </p>
          </div>
          <div className="mt-3">
            <p className="text-sm">
              1. Charlie’s mother said, “Some kids are not only away from
              parents but they have also left their home.” Charlie said,
              “That’s horrible,” and she began to cry.
            </p>
            <div className="lg:flex gap-3 w-full  mt-3 items-center">
              <span className="text-sm font-semibold w-[16em]">Charlie is showing</span>
              <div className="flex flex-col w-full">
                <input
                  type="text"
                  className="input-field bg-inherit px-5 max-w-[450px]"
                  onChange={handleInputChange}
                  value={firstAns}
                />
                {errorFirst && (
                  <div className="text-[#F13737] text-[0.750em]">
                    *Incorrect Answer, *Hint: "Showing Empathy"
                  </div>
                )}
              </div>
              {isCorrectFirst && (
                <div className="text-[#28A745] text-[0.750em] font-bold">
                  ✓ Correct Answer
                </div>
              )}
            </div>
          </div>

          <div className="mt-7">
            <button
              className="bg-[#FAD8E3] w-full"
              onClick={handleSubmit}
            >
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
