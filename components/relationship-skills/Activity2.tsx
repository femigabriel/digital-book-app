import React, { useState } from "react";
import Image from "next/image";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

export const Activity2 = ({ onNextClick, onBackClick }: Props) => {
  const [secondAns, setSecondAns] = useState("");
  const [errorSecond, setErrorSecond] = useState(false);
  const [isCorrectSecond, setIsCorrectSecond] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const answer = e.target.value;
    setSecondAns(answer);
    setErrorSecond(false); // Reset error on input change
    setIsCorrectSecond(false); // Reset correct state on input change
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if answer is correct
    if (secondAns.toLowerCase() === "being a good listener") {
      setErrorSecond(false);
      setIsCorrectSecond(true);
      onNextClick(); 
    } else {
      setErrorSecond(true);
      setIsCorrectSecond(false);
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
        <form onSubmit={handleSubmit} className="px-5 py-5">
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
              2. Charlie held Mya as she cried on her shoulder. The school bus
              driver walked over and asked a question. “Are you girls okay?”
            </p>
            <div className="lg:flex gap-3 w-full mt-3 items-center">
              <span className="text-sm font-semibold w-[18em]">
                The bus driver is showing
              </span>
              <div className="flex flex-col w-full">
                <input
                  type="text"
                  className="input-field bg-inherit px-5 max-w-[450px]"
                  onChange={handleInputChange}
                  value={secondAns}
                />
                {errorSecond && (
                  <div className="text-[#F13737] text-[0.750em]">
                    *Incorrect Answer, *Hint: "Being a Good Listener"
                  </div>
                )}
              </div>
              {isCorrectSecond && (
                <div className="text-[#28A745] text-[0.750em] font-bold">
                  ✓ Correct Answer
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
