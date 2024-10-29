import React, { useState } from "react";
import { Introducton } from "./Introducton";
import { RelationshipSkillsHeader } from "./RelationshipSkillsHeader";
import { SkillsList } from "./SkillsList";
import { Activity1 } from "./Activity1";
import { Activity2 } from "./Activity2";
import { Activity3 } from "./Activity3";

export const RelationshipSkillsPage = () => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };
  const handleBack = () => {
    setStep((x) => x - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return <Introducton onNextClick={handleNext} onBackClick={handleBack} />;
      case 1:
        return <SkillsList onNextClick={handleNext} onBackClick={handleBack}/>;
      case 2:
        return <Activity1 onNextClick={handleNext} onBackClick={handleBack} />;
      case 3:
        return <Activity2 onNextClick={handleNext} onBackClick={handleBack} />;
      case 4:
        return <Activity3 onNextClick={handleNext} onBackClick={handleBack} />;
      default:
        return <p>Thank you for completing the activities!</p>;
    }
  };

  return (
    <div>
      {/* <RelationshipSkillsHeader /> */}
      <div className="div">{renderStep()}</div>
    </div>
  );
};
