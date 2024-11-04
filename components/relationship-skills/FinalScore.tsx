import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Modal } from "antd";
import { useRouter } from "next/navigation"; // Import useRouter

export const FinalScore = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const celebrationSound = "/sounds/756229__timbre__yeah-man-rock-roll.flac";
  const score = 3;
  const router = useRouter(); 

  useEffect(() => {
    // Play celebration sound and start confetti when the page loads
    const audio = new Audio(celebrationSound);
    audio.play();

    // Start the confetti and balloon animation
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  }, []);

  const handleSaveScore = () => {
    console.log("Score saved:", score);
  };

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
      
      },
    });
  };

  return (
    <div className="bg-[#FAD8E3]">
        <div className="px-10 py-5 h-[90px] bg-[#FAD8E3] shadow flex justify-between items-center">
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
      
        </div>
      </div>
      <div className="flex justify-center items-center min-h-screen final-score relative bg-[#FAD8E3]">
        {showConfetti && <ConfettiAnimation />}
        <div className="px-5 py-7 flex justify-center items-center w-full max-w-[700px]  rounded-lg shadow-md bg-[#FFFEE9]">
          <div className="w-full">
            <div className="flex justify-center items-center mb-2">
              <Image
                src="/icons/emoji-happy.svg"
                alt="Logo"
                width={50}
                height={50}
              />
            </div>
            <h2 className="text-4xl text-center font-bold text-[#FF4500] mb-3">
              🎉 Fantastic!!! 🎉
            </h2>

            <p className="mb-5 text-sm text-[#303030] text-center">
              You really understand the relationship skills!
            </p>

            <div className=" flex justify-center items-center">
              <div className="div">
                <h3 className="text-center text-[#CA0077] text-xl">Score:</h3>
                <p className="text-2xl  text-[#303030] mb-1 text-center">
                  You scored {score}/3!
                </p>
                <h4 className="text-center mt-3 text-sm">Correct</h4>
              </div>
            </div>

            <div className="mt-5">
              <button className="bg-[#FAD8E3] w-full" onClick={handleSaveScore}>
                <Image
                  src="/images/Submit Button.svg"
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
