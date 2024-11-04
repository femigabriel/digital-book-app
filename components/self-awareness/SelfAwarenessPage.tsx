import React, { useState } from 'react';
import { Introducton } from './Introducton';
import { Activity1 } from './Activity1';
import { Activity2 } from './Activity2';
import { FinalScore } from './FinalScore';

export const SelfAwarenessPage = () => {
  const [step, setStep] = useState(0);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  const handleNext = () => setStep((prevStep) => prevStep + 1);
  const handleBack = () => setStep((prevStep) => Math.max(prevStep - 1, 0));

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <Introducton onNextClick={handleNext} onBackClick={handleBack} />
        );

      case 1:
        return (
          <Activity1
            onNextClick={handleNext}
            onBackClick={handleBack}
            setSelectedWord={setSelectedWord}
          />
        );

      case 2:
        return (
          <Activity2
            onNextClick={handleNext}
            onBackClick={handleBack}
            selectedWord={selectedWord}
          />
        );

      default:
        return <FinalScore />;
    }
  };

  return (
    <div>
      <div className="div">{renderStep()}</div>
    </div>
  );
};
