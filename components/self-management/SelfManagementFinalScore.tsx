import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Modal, notification } from "antd";

interface Props {
  selectedAnswer: number | null;
  onBackClick: () => any;
  userId: string;
  activityName: string;
}

export const SelfManagementFinalScore = ({
  selectedAnswer,
  onBackClick,
  userId,
  activityName,
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

  const saveScoreToDatabase = async () => {
    try {
      const response = await fetch("/api/save-score", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          score,
          activityName,
        }),
      });
      if (response.ok) {
        notification.success({
          message: "Score Saved",
          description: "Your score has been saved successfully.",
        });
      } else {
        notification.error({
          message: "Error",
          description: "Failed to save score. Please try again.",
        });
      }
    } catch (error) {
      notification.error({
        message: "Error",
        description: "An unexpected error occurred.",
      });
    }
  };

  // Reload the page to retake the activity
  const handleRetakeActivity = () => {
    window.location.reload();
  };

  return (
    <div className="w-full bg-[#ECE0F5]">
      <div className="px-10 py-5 h-[90px] bg-[#ECE0F5] shadow flex justify-between items-center">
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
      <div className="flex justify-center items-center min-h-screen relative bg-[#ECE0F5]">
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
            <button
              className="bg-[#8BC34A] text-white py-2 px-4 rounded-full text-lg font-bold hover:bg-[#7CB342] transition-all"
              onClick={saveScoreToDatabase}
            >
              Save Score 📝
            </button>
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
