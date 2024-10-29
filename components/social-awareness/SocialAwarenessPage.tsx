import React, { useState } from "react";
import { Introducton } from "./Introducton";
import { BusStop1 } from "./BusStop1";
import { BusStop2 } from "./BusStop2";
import { BusStop3 } from "./BusStop3";
import { BusStop4 } from "./BusStop4";
import { BusStopFinalScore } from "./BusStopFinalScore";

export const SocialAwarenessPage = () => {
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
        return <BusStop1 onNextClick={handleNext} onBackClick={handleBack} />;
      case 2:
        return <BusStop2 onNextClick={handleNext} onBackClick={handleBack} />;
      case 3:
        return <BusStop3 onNextClick={handleNext} onBackClick={handleBack} />;
      case 4:
        return <BusStop4 onNextClick={handleNext} onBackClick={handleBack} />;
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
