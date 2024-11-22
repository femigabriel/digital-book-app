import React, { useEffect, useState } from "react";
import { Activity1 } from "./Activity1";
import { Introducton } from "./Introducton";
import { SelfManagementFinalScore } from "./SelfManagementFinalScore";
import { useUser } from "@/context/UserContext";
import { ResultContext } from "@/context/ResultContext";
import { useContext } from "react";

export const SelfManagementPage = () => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const user = useUser();
  const [isUserLoaded, setIsUserLoaded] = useState(false);
  const { state } = useContext(ResultContext);

  const questions = [
    { id: 1, correctAns: "Yes" },
    { id: 2, correctAns: "Yes" },
    { id: 3, correctAns: "No" },
    { id: 4, correctAns: "Yes" },
    { id: 5, correctAns: "Yes" },
    { id: 6, correctAns: "No" },
    { id: 7, correctAns: "No" },
    { id: 8, correctAns: "Yes" },
  ];

  // Check if user data is loaded
  useEffect(() => {
    if (user) {
      setIsUserLoaded(true);
    }
  }, [user]);

  const handleNext = () => setStep((prevStep) => prevStep + 1);
  const handleBack = () => setStep((prevStep) => Math.max(prevStep - 1, 0));

  // Calculate correct and missed answers
  const userAnswers = state?.self || [];
  const correctCount = userAnswers.filter((answer: any) => answer.isCorrect).length;
  const missedCount = questions.length - correctCount;
  const totalQuestions = questions.length;
  
  // Compute the score as a percentage
  const scorePercentage = (correctCount / totalQuestions) * 100;
  

  // Compute the score as a percentage

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <Introducton onNextClick={handleNext} onBackClick={handleBack} />
        );

      case 1:
        return <Activity1 onNextClick={handleNext} onBackClick={handleBack} />;

      default:
        return (
          <SelfManagementFinalScore
            selectedAnswer={selectedAnswer}
            onBackClick={handleBack}
            score={scorePercentage} // Pass percentage score
            correctCount={correctCount} // Pass correct answer count
            missedCount={missedCount} // Pass missed answer count
            userId={user?._id || "Unknown User"}
            activityName="Self Management"
          />
        );
    }
  };

  return <div>{renderStep()}</div>;
};
