import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Modal } from "antd";
import { useRouter } from "next/navigation";
import { SoundOutlined, MutedOutlined } from "@ant-design/icons";
import { ResultContext } from "@/context/ResultContext";
import Link from "next/link";

export const FinalScore = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const celebrationSound = "/sounds/756229__timbre__yeah-man-rock-roll.flac";
  const router = useRouter();
  const resultContext = useContext(ResultContext);
  const { state } = resultContext;

  const audio = new Audio(celebrationSound);

  const correctAnswers =
    state?.results.filter((result) => result.isCorrect).length || 0;
  const totalQuestions = 20;
  const missedAnswers = totalQuestions - correctAnswers;

  useEffect(() => {
    if (correctAnswers === 20 && !isMuted) {
      audio.play();
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [correctAnswers, isMuted]);

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  const handleQuit = () => {
    Modal.confirm({
      title: "Are you sure you want to quit?",
      content: "You will lose your progress if you leave this page.",
      okText: "Yes, I’m sure!",
      cancelText: "No, I want to stay!",
      onOk: () => {
        router.push("/student-dashboard");
      },
    });
  };

  // Determine message based on score
  const getMessage = () => {
    if (correctAnswers === 20) {
      return "🎉 Great Job, Kiddie! You aced it with a perfect score!";
    } else if (correctAnswers >= 11 && correctAnswers < 20) {
      return "Well done! You're close! Keep trying to reach a perfect score.";
    } else {
      return "Keep practicing! Try again to improve your score!";
    }
  };

  const handleSaveScore = () => {
    console.log("Score saved:", correctAnswers);
  };
  // Reload the page to retake the activity
  const handleRetakeActivity = () => {
    window.location.reload();
  };

  return (
    <div className="bg-[#FAD8E3] w-full !h-screen">
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
      <div className="flex justify-center items-center h-screen bg-[#FAD8E3]">
        {showConfetti && <ConfettiAnimation />}
        <div className="px-5 py-7 flex justify-center items-center w-full max-w-[700px] rounded-lg shadow-md bg-[#FFFEE9]">
          <div className="flex justify-center items-center">
            <div className="w-full ">
              <div className="w-full flex justify-center items-center">
                <Image
                  src="/icons/emoji-happy.svg"
                  alt="Logo"
                  width={50}
                  height={50}
                />
              </div>
              <div className="text-center">
                <p className="text-lg text-[#4CAF50] mt-4">
                  🎉 You got{" "}
                  <span className="font-bold">
                    {correctAnswers}/{totalQuestions}
                  </span>{" "}
                  correct!
                </p>
                <div className="mb-5 ">
                  <p className="text-lg text-[#FF5733] mt-2">
                    😯 You missed{" "}
                    <span className="font-bold">{missedAnswers}</span>{" "}
                    questions.
                  </p>
                  <p className="text-md mt-4 text-[#333]">{getMessage()}</p>
                </div>
                <div className="flex justify-center items-center mt-5">
                  <button
                    className="bg-[#8BC34A] text-white py-2 px-4 rounded-full text-lg font-bold hover:bg-[#7CB342] transition-all"
                    onClick={handleSaveScore}
                  >
                    Save Score 📝
                  </button>
                </div>
                <div className="div">
                  <button
                    className="text-[#9B59B6] text-sm mt-5 underline"
                    onClick={handleRetakeActivity}
                  >
                    Retake Activity
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Confetti Animation Component
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
