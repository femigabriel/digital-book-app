import React, { useEffect, useState } from "react";
import { Modal, notification } from "antd";
import Image from "next/image";

interface Props {
  selectedAnswer: number | null;
  onBackClick: () => any;
  userId: string;
  activityName: string;
  score: number;
  correctCount: number; // New prop for correct answers count
  missedCount: number; // New prop for missed answers count
}

export const SelfManagementFinalScore = ({
  selectedAnswer,
  onBackClick,
  userId,
  activityName,
  score,
  correctCount,
  missedCount,
}: Props) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const celebrationSound = "/sounds/756229__timbre__yeah-man-rock-roll.flac";
  const correctAnswer = 6;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedAnswer === correctAnswer) {
      const audio = new Audio(celebrationSound);
      audio.play();
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 10000);
    }
  }, [selectedAnswer]);

  const saveScoreToDatabase = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/save-score", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, score, activityName }),
      });

      const result = await response.json();

      if (response.ok) {
        notification.success({
          message: "Score Saved",
          description: "Your score was saved successfully!",
        });
      } else {
        notification.error({
          message: "Failed to Save",
          description:
            result.message || "An error occurred while saving your score.",
        });
      }
    } catch (error) {
      notification.error({
        message: "Error",
        description: "Unable to save your score. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

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
            <h2 className="text-4xl font-bold text-[#FF4500] mb-3 text-center">
              {selectedAnswer === correctAnswer
                ? "🎉 Great job! 🎉"
                : "Oops! Almost there!"}
            </h2>
            <p className="text-2xl text-center font-semibold text-[#4CAF50] mb-1">
              Your Score: {score}% ({correctCount} correct, {missedCount}{" "}
              missed)
            </p>
      
            <button
              className="bg-[#FAD8E3] w-full flex justify-center items-center"
              onClick={saveScoreToDatabase}
              disabled={loading}
            >
              {loading ? (
                <span className="text-sm text-gray-500">Saving...</span>
              ) : (
                <Image
                  src="/images/Submit Button.svg"
                  alt="save score"
                  width={64}
                  height={64}
                  className="max-w-full w-full h-auto"
                />
              )}
            </button>
            <div className="flex justify-center items-center">
            <button
              className="text-[#9B59B6]  text-sm mt-5 underline"
              onClick={handleRetakeActivity}
            >
              Retake Activity
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
