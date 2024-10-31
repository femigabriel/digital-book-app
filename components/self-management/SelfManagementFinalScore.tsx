import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  selectedAnswer: number | null;
  onBackClick: () => any;
}

export const SelfManagementFinalScore = ({
  selectedAnswer,
  onBackClick,
}: Props) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const celebrationSound = "/sounds/756229__timbre__yeah-man-rock-roll.flac";
  const correctAnswer = 6;
  const score = selectedAnswer === correctAnswer ? 20 : 0;

  useEffect(() => {
    if (selectedAnswer === correctAnswer) {
      const audio = new Audio(celebrationSound);
      audio.play();
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 10000);
    }
  }, [selectedAnswer]);

  const handleSaveScore = () => {
    console.log("Score saved:", score);
  };

  return (
    <div className="w-full bg-[#ECE0F5]">
      <div className="px-10 py-5 h-[90px] bg-[#ECE0F5] shadow flex justify-between items-center">
        <div>
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
        <div>
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
      <div className="flex justify-center items-center min-h-screen bus-stop relative bg-[#ECE0F5]">
        {showConfetti && <ConfettiAnimation />}
        <div className="px-5 py-7 flex justify-center items-center w-full max-w-[650px] rounded-lg shadow-md bg-[#FAD8E3]">
          <div>
            <div className="flex justify-center items-center mb-2">
              <Image
                src="/icons/emoji-happy.svg"
                alt="Logo"
                width={50}
                height={50}
              />
            </div>
            <div className="flex justify-center items-center">
              <div className="">
                <h2 className="text-4xl font-bold text-[#FF4500] mb-3">
                  {selectedAnswer === correctAnswer
                    ? "🎉 Great job! 🎉"
                    : "Oops! Almost there!"}
                </h2>
                <p className="text-2xl font-semibold text-[#4CAF50] mb-1">
                  You selected answer {selectedAnswer}.
                </p>
                {selectedAnswer !== correctAnswer && (
                  <p className="text-base text-[#FF6347]">
                    The correct answer is number {correctAnswer}. Try again to
                    improve!
                  </p>
                )}
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-[#CA0077] text-xl text-center">
                Correct Answer:
              </h3>
              <p className="text-[#3F3F46] text-sm">
                The best example of self-management is sentence 6:
              </p>
              <span className="text-[#303030] text-xl">
                "Charlie stayed calm and spoke with confidence to answer Mya's
                question."
              </span>
              <p className="text-sm text-[#3F3F46] my-2">
                <span className="mt-2 font-semibold">Explanation:</span> In this
                sentence, Charlie is managing his emotions and staying calm. He’s
                also confident, which is a good way to handle situations.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <button
                className="bg-[#8BC34A] text-white py-2 px-4 rounded-full text-lg font-bold hover:bg-[#7CB342] transition-all"
                onClick={handleSaveScore}
              >
                Save Score 📝
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Confetti and Balloon Animation Component
const ConfettiAnimation = () => {
  return (
    <div className="confetti-container">
      {[...Array(30)].map((_, index) => (
        <div key={index} className="confetti">
          🎈 🎉
        </div>
      ))}
    </div>
  );
};
