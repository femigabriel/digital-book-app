import React, { useState } from "react";
import { Introducton } from "./Introducton";
import { SkillsList } from "./SkillsList";
import { Activity1 } from "./Activity1";
import { Activity2 } from "./Activity2";
import { Activity3 } from "./Activity3";
import { FinalScore } from "./FinalScore";

export const RelationshipSkillsPage = () => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState<number>(0); // Default score to 0

  const handleNext = () => setStep((prevStep) => prevStep + 1);
  const handleBack = () => setStep((prevStep) => Math.max(prevStep - 1, 0));

  // Update the score based on the user's answer in Activity3
  const handleScoreUpdate = (newScore: number) => setScore(newScore);

  const renderStep = () => {
    switch (step) {
      case 0:
        return <Introducton onNextClick={handleNext} onBackClick={handleBack} />;
      case 1:
        return <SkillsList onNextClick={handleNext} onBackClick={handleBack} />;
      case 2:
        return <Activity1 onNextClick={handleNext} onBackClick={handleBack} />;
      case 3:
        return <Activity2 onNextClick={handleNext} onBackClick={handleBack} />;
      case 4:
        return (
          <Activity3
            onNextClick={(isCorrect: boolean) => {
              handleScoreUpdate(isCorrect ? 3 : 2); // Update score based on answer
              handleNext();
            }}
            onBackClick={handleBack}
          />
        );
      default:
        return <FinalScore score={score} />;
    }
  };

  return (
    <div>
      <div className="div">{renderStep()}</div>
    </div>
  );
};
