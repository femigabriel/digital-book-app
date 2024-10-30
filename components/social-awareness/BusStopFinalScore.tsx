import React, { useEffect, useState } from "react";
import Image from "next/image";

export const BusStopFinalScore = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const celebrationSound = "/sounds/756229__timbre__yeah-man-rock-roll.flac";
  const score = 20;

  useEffect(() => {
    // Play celebration sound and start confetti when the page loads
    const audio = new Audio(celebrationSound);
    audio.play();

    // Start the confetti and balloon animation
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 10000);
  }, []);

  const handleSaveScore = () => {
    console.log("Score saved:", score);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bus-stop relative bg-[#ECE0F5]">
      {showConfetti && <ConfettiAnimation />}
      <div className="px-5 py-7 flex justify-center items-center w-full max-w-[500px]  rounded-lg shadow-md bg-[#FAD8E3]">
        <div>
          <div className="flex justify-center items-center mb-2">
            <Image
              src="/icons/emoji-happy.svg"
              alt="Logo"
              width={50}
              height={50}
            />
          </div>
          <h2 className="text-4xl font-bold text-[#FF4500] mb-3">
            🎉 Fantastic!!! 🎉
          </h2>
          <p className="text-2xl font-semibold text-[#4CAF50] mb-1">
            You scored {score}/20!
          </p>
          <div className="mb-5 text-sm text-[#303030]">
            <p> You really understand the Bus Stop Bop!</p>
          </div>
          <button
            className="bg-[#8BC34A] text-white py-2 px-4 rounded-full text-lg font-bold hover:bg-[#7CB342] transition-all"
            onClick={handleSaveScore}
          >
            Save Score 📝
          </button>
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
