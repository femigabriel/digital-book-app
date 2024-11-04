import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Modal } from "antd";
import { useRouter } from "next/navigation"; 
import { SoundOutlined, MutedOutlined  } from "@ant-design/icons"; // Import icons

interface FinalScoreProps {
  score: number;
}

export const FinalScore = ({ score }: FinalScoreProps) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const celebrationSound = "/sounds/756229__timbre__yeah-man-rock-roll.flac";
  const router = useRouter(); 
  const audio = new Audio(celebrationSound);

  useEffect(() => {
    audio.volume = isMuted ? 0 : 1;
    audio.play();
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isMuted]);

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
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
    });
  };

  return (
    <div className="bg-[#FAD8E3]">
      <div className="flex justify-between items-center px-10 py-5 h-[90px] bg-[#FAD8E3] shadow">
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
        <button onClick={handleMuteToggle}>
          {isMuted ? (
            <MutedOutlined style={{ fontSize: "24px", color: "#303030" }} />
          ) : (
            <SoundOutlined style={{ fontSize: "24px", color: "#303030" }} />
          )}
        </button>
      </div>
      <div className="flex justify-center items-center min-h-screen bg-[#FAD8E3]">
        {showConfetti && <ConfettiAnimation />}
        <div className="px-5 py-7 flex justify-center items-center w-full max-w-[700px] rounded-lg shadow-md bg-[#FFFEE9]">
          <div className="w-full text-center">
            <Image src="/icons/emoji-happy.svg" alt="Logo" width={50} height={50} />
            <h2 className="text-4xl font-bold text-[#FF4500] mb-3">
              {score === 3 ? "🎉 Fantastic!!! 🎉" : "Oops, you nearly got it!"}
            </h2>
            <p className="mb-5 text-sm text-[#303030]">
              {score === 3 
                ? "You really understand the relationship skills!" 
                : "Keep practicing to improve your relationship skills!"}
            </p>
            <h3 className="text-xl text-[#CA0077]">Score:</h3>
            <p className="text-2xl text-[#303030] mb-1">{`You scored ${score}/3!`}</p>
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
