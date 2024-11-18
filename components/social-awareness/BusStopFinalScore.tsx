import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import { Modal, notification } from "antd";
import { ResultContext } from "@/context/ResultContext";
import { useRouter } from "next/navigation";
import { SoundOutlined, MutedOutlined } from "@ant-design/icons";

// export const BusStopFinalScore = () => {
interface Props {
  selectedAnswer: number | null;
  onBackClick: () => any;
  userId: string;
  activityName: string;
  score: number;
}

export const BusStopFinalScore = ({
  selectedAnswer,
  onBackClick,
  userId,
  activityName,
  score,
}: Props) => {
  const resultContext = useContext(ResultContext);
  const { state } = resultContext;
  const [isMuted, setIsMuted] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Sound settings and confetti
  const celebrationSound = "/sounds/756229__timbre__yeah-man-rock-roll.flac";
  const audio = new Audio(celebrationSound);
  const totalQuestions = 20; // Adjust as per total questions in all activities

  // Calculate final score
  const correctAnswers =
    state?.busStopResults.filter((result) => result.isCorrect).length || 0;
  const missedAnswers = totalQuestions - correctAnswers;

  // Play sound only if the score is perfect
  useEffect(() => {
    if (correctAnswers === totalQuestions && !isMuted) {
      audio.play();
    }
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [correctAnswers, isMuted]);

  // Feedback text based on score ranges
  const getFeedbackMessage = () => {
    if (correctAnswers === totalQuestions)
      return "🎉 Excellent job! You answered everything perfectly!";
    if (correctAnswers >= 11 && correctAnswers <= 18)
      return "Good job! Keep practicing to reach the top!";
    return "Don’t worry, keep practicing and you’ll get there!";
  };

  // Mute sound toggle
  const handleMuteToggle = () => setIsMuted(!isMuted);

  const handleQuit = () => {
    Modal.confirm({
      title: "Are you sure you want to quit?",
      content: "You will lose your progress if you leave this page.",
      okText: "Yes, I’m sure!",
      cancelText: "No, I want to stay!",
      onOk: () => router.push("/student-dashboard"),
    });
  };

  // Reload the page to retake the activity
  const handleRetakeActivity = () => {
    window.location.reload();
  };

  const saveScoreToDatabase = async () => {
    setLoading(true); // Show loading spinner on button
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
      setLoading(false); // Hide loading spinner on button
    }
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
        <div className="px-5 py-7 flex justify-center items-center w-full max-w-[700px] rounded-lg shadow-md bg-[#FFFEE9]">
          <div className="w-full text-center">
            <div className="flex justify-center items-center">
              <Image
                src="/icons/emoji-happy.svg"
                alt="Logo"
                width={50}
                height={50}
              />
            </div>
            <p className="text-lg text-[#4CAF50] mt-4">
              🎉 You got{" "}
              <span className="font-bold">
                {correctAnswers}/{totalQuestions}
              </span>{" "}
              correct!
            </p>
            <p className="text-lg text-[#FF5733] mt-2">
              😯 You missed <span className="font-bold">{missedAnswers}</span>{" "}
              questions.
            </p>
            <p className="text-md mt-4 text-[#333]">{getFeedbackMessage()}</p>
            <div className="flex justify-center items-center mt-5">
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
            </div>
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

// import React, { useEffect, useState } from "react";
// import Image from "next/image";

// export const BusStopFinalScore = () => {
//   const [showConfetti, setShowConfetti] = useState(false);
//   const celebrationSound = "/sounds/756229__timbre__yeah-man-rock-roll.flac";
//   const score = 20;

//   useEffect(() => {
//     // Play celebration sound and start confetti when the page loads
//     const audio = new Audio(celebrationSound);
//     audio.play();

//     // Start the confetti and balloon animation
//     setShowConfetti(true);
//     setTimeout(() => setShowConfetti(false), 10000);
//   }, []);

//   const handleSaveScore = () => {
//     console.log("Score saved:", score);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bus-stop relative bg-[#ECE0F5]">
//       {showConfetti && <ConfettiAnimation />}
//       <div className="px-5 py-7 flex justify-center items-center w-full max-w-[500px]  rounded-lg shadow-md bg-[#FAD8E3]">
//         <div>
//           <div className="flex justify-center items-center mb-2">
//             <Image
//               src="/icons/emoji-happy.svg"
//               alt="Logo"
//               width={50}
//               height={50}
//             />
//           </div>
//           <h2 className="text-4xl font-bold text-[#FF4500] mb-3">
//             🎉 Fantastic!!! 🎉
//           </h2>
//           <p className="text-2xl font-semibold text-[#4CAF50] mb-1">
//             You scored {score}/20!
//           </p>
//           <div className="mb-5 text-sm text-[#303030]">
//             <p> You really understand the Bus Stop Bop!</p>
//           </div>
//           <button
//             className="bg-[#8BC34A] text-white py-2 px-4 rounded-full text-lg font-bold hover:bg-[#7CB342] transition-all"
//             onClick={handleSaveScore}
//           >
//             Save Score 📝
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Confetti and Balloon Animation Component
// const ConfettiAnimation = () => {
//   return (
//     <div className="confetti-container">
//       {[...Array(30)].map((_, index) => (
//         <div key={index} className="confetti">
//           🎈 🎉
//         </div>
//       ))}
//     </div>
//   );
// };
