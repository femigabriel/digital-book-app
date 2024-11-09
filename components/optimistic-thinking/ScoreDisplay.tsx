import { ResultContext } from "@/context/ResultContext";
import React, { useContext } from "react";

export const ScoreDisplay = () => {
  const resultContext = useContext(ResultContext);
  const { state } = resultContext;

  // Calculate the score
  const correctAnswers =
    state?.results.filter((result) => result.isCorrect).length || 0;
  const totalQuestions = 20;
  const missedAnswers = totalQuestions - correctAnswers;

  return (
    <div className="flex flex-col items-center text-center bg-[#FFFBEB] p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-[#FFB800]">Great Job, Kiddie!</h2>
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
      <p className="text-md mt-4 text-[#333]">
        Try again to improve your score!
      </p>
    </div>
  );
};

export default ScoreDisplay;
