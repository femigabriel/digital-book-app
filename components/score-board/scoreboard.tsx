// pages/scoreboard.tsx
import React from "react";
import ScoreChart from "./ScoreChart";
import ScoreHighlight from "./ScoreHighlight";
import { SscoreBoardHeader } from "./SscoreBoardHeader";


export default function Scoreboard() {
  return (
    <div className="w-full h-full">
      <SscoreBoardHeader />
      <div className="score-header w-full h-screen">
      <ScoreChart />
      <ScoreHighlight />
      </div>
     
    </div>
  );
}
