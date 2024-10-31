import React, { useState } from "react";
import { Activity1 } from "./Activity1";
import { Introducton } from "./Introducton";
import { SelfManagementFinalScore } from "./SelfManagementFinalScore";

export const SelfManagementPage = () => {
  const [step, setStep] = useState(0);

  const handleNext = () => setStep((prevStep) => prevStep + 1);
  const handleBack = () => setStep((prevStep) => Math.max(prevStep - 1, 0));

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <Introducton onNextClick={handleNext} onBackClick={handleBack} />
        );

      case 1:
        return <Activity1 onNextClick={handleNext} onBackClick={handleBack} />;

      default:
        return <SelfManagementFinalScore  onBackClick={handleBack} selectedAnswer={null}/>;
    }
  };

  return (
    <div>
      <div className="div">{renderStep()}</div>
    </div>
  );
};
