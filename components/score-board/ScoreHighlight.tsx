// components/ScoreHighlight.tsx
import React, { useState } from "react";

const categories = [
  {
    title: "RELATIONSHIP SKILL ROCK CHARLIES CHOICES",
    points: 1500,
    maxPoints: 3000,
    color: "bg-purple-500", // Left bar color
  },
  {
    title: "BUS STOP BOP",
    points: 800,
    maxPoints: 3000,
    color: "bg-pink-500",
  },
  {
    title: "TIME MANAGEMENT MASTER",
    points: 1200,
    maxPoints: 3000,
    color: "bg-blue-500",
  },
  {
    title: "CREATIVE THINKER",
    points: 1700,
    maxPoints: 3000,
    color: "bg-green-500",
  },
  {
    title: "EMOTIONAL INTELLIGENCE",
    points: 1000,
    maxPoints: 3000,
    color: "bg-red-500",
  },
  {
    title: "PROBLEM SOLVING",
    points: 2000,
    maxPoints: 3000,
    color: "bg-yellow-500",
  },
];

export default function ScoreHighlight() {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-center mt-4">Score Highlight</h2>

   <div className="flex justify-center items-center">
   <div className="grid grid-cols-2 gap-4 p-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className=" rounded-lg bg-[#F8F8F8] pr-4 shadow-lg flex items-center"
          >
            <div className={`w-4 h-full ${category.color}  rounded-l-lg`} />
            <div className="flex-grow  p-4">
              <h3 className="font-semibold text-base">{category.title}</h3>
              <p>{category.maxPoints} pts maximum</p>
            </div>
            <span 
            className='text-sm '
            style={{ color: `${category.color}` }}
            >{category.points} pts</span>
          </div>
        ))}
      </div>
   </div>
    </div>
  );
}
