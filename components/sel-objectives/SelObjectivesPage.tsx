import React, { useEffect, useState } from "react";
import { Introducton } from "./Introducton";
import { useUser } from "@/context/UserContext";
import { Introduction2 } from "./Introduction2";

export const SelObjectivesPage = () => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);  
  const user = useUser();
  const [isUserLoaded, setIsUserLoaded] = useState(false);

  // Check if user data is loaded
  useEffect(() => {
    if (user) {
      setIsUserLoaded(true);
    }
  }, [user]);

  const handleNext = () => setStep((prevStep) => prevStep + 1);
  const handleBack = () => setStep((prevStep) => Math.max(prevStep - 1, 0));

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <Introducton onNextClick={handleNext} onBackClick={handleBack} />
        );

      case 1:
        return <Introduction2 onNextClick={handleNext} onBackClick={handleBack} />;

    //   default:
    //     return (
    //       <SelfManagementFinalScore
    //         selectedAnswer={selectedAnswer}  
    //         onBackClick={handleBack}          
    //         score={score}
    //         userId={user?._id || "Unknown User"} 
    //         activityName="Bus Stop Bop"
    //       />
    //     );
    }
  };

  return <div>{renderStep()}</div>;
};
