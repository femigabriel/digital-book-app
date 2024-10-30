import React, { useState } from "react";
import { Introducton } from "./Introducton";
import { SelfManagement } from "./SelfManagement";
import { BusStopFinalScore } from "../social-awareness/BusStopFinalScore";

export const GoodDecisionMakingPage = () => {
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
          return <SelfManagement onNextClick={handleNext} onBackClick={handleBack} />;
       
        default:
          return <BusStopFinalScore />;
      }
    };
  
    return (
      <div>
        <div className="div">{renderStep()}</div>
      </div>
    );
  };
  
