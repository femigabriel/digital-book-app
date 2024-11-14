import React, { useState, useEffect } from "react";

interface Props {
  content?: string;
  pageNumber: number;
}

export const PageContent = (props: Props) => {
  const [isReading, setIsReading] = useState(false); // Track if the content is being read aloud
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null); // Track the utterance object
  const [isPaused, setIsPaused] = useState(false); // Track if the reading is paused

  useEffect(() => {
    // Cancel any ongoing speech when content changes or component unmounts
    speechSynthesis.cancel();

    // Create a new SpeechSynthesisUtterance object when the component mounts or content changes
    if (props.content) {
      const newUtterance = new SpeechSynthesisUtterance(props.content);
      newUtterance.lang = "en-US"; // Set the language (adjust as necessary)
      newUtterance.onend = () => {
        setIsReading(false); // Reset reading state when finished
      };
      setUtterance(newUtterance);
    }

    // Cleanup function to stop the speech when component unmounts
    return () => {
      speechSynthesis.cancel(); // Cancel any ongoing speech when the component is unmounted
    };
  }, [props.content]); // Re-run the effect when content changes

  const startReading = () => {
    if (utterance) {
      if (isPaused) {
        // Resume reading from where it was paused
        speechSynthesis.resume();
      } else {
        // Start reading from the beginning
        speechSynthesis.speak(utterance);
      }
      setIsReading(true);
      setIsPaused(false);
    }
  };

  const pauseReading = () => {
    if (isReading && utterance) {
      speechSynthesis.pause(); // Pause the reading
      setIsPaused(true);
    }
  };

  const stopReading = () => {
    if (utterance) {
      speechSynthesis.cancel(); // Stop the reading and reset position
      setIsReading(false);
      setIsPaused(false);
    }
  };

  return (
    <div className="bg-[#FFFEE9] w-full h-full">
      <div className="w-full px-5 mb-5 lg:px-10 py-7 text-md flex items-center justify-center leading-8 bg-[#e1d1f]">
        <div className="text-center flex justify-center items-center text-[1em] text-[#18181B] px-10 lg:px-0">
          <p>{props.content}</p>
        </div>
      </div>
      <div className="flex lg:items-end float-right my-5 lg:mt-10 mx-5">
        <span></span>
        <p className="text-[0.65em]">{props.pageNumber}</p>
      </div>

      {/* Play/Pause/Stop Buttons */}
      <div className="flex justify-center my-3 space-x-3">
        <button
          onClick={startReading}
          className="px-4 py-2 bg-green-500 text-white rounded-full"
        >
          {isReading && !isPaused ? "Pause Reading" : "Play Reading"}
        </button>
        <button
          onClick={pauseReading}
          disabled={!isReading || isPaused}
          className="px-4 py-2 cursor-pointer bg-yellow-500 text-white rounded-full"
        >
          Pause
        </button>
        <button
          onClick={stopReading}
          disabled={!isReading}
          className="px-4 py-2 bg-red-500 text-white rounded-full"
        >
          Stop
        </button>
      </div>
    </div>
  );
};
