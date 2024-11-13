import { useUser } from "@/context/UserContext";
import React from "react";

// Define the color and title mappings for activities
const activityColors = [
  { color: "bg-purple-500" },
  { color: "bg-pink-500" },
  { color: "bg-blue-500" },
  { color: "bg-green-500" },
  { color: "bg-red-500" },
  { color: "bg-yellow-500" },
  { color: "bg-indigo-500" },  // Example new activity
  { color: "bg-teal-500" },    // Example new activity
  { color: "bg-orange-500" },  // Example new activity
  { color: "bg-gray-500" }     // Example new activity
];

export default function ScoreHighlight() {
  const user = useUser();

  if (!user || !user.scores || user.scores.length === 0) {
    return <div>No scores available.</div>;
  }

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-center mt-4">Score Highlight</h2>

      <div className="flex justify-center items-center">
        {/* Grid for 2 items per row, with adjusted card size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
          {user.scores.map((scoreEntry, index) => {
            const activity = activityColors[index]; // Get the color for the activity
            if (!activity) return null; // In case there are more scores than activities

            return (
              <div
                key={index}
                className="rounded-lg bg-[#F8F8F8] shadow-lg flex items-center p-6"
              >
                {/* Left bar with specific color based on activity */}
                <div className={`w-6 h-full ${activity.color} rounded-l-lg`} />
                
                <div className="flex-grow p-4">
                  {/* Display the activity name from the db */}
                  <h3 className="font-semibold text-lg">{scoreEntry.activityName}</h3>
                  {/* Display max points */}
                  <p>3000 pts maximum</p>
                </div>
                
                <span className="text-sm font-semibold" style={{ color: activity.color }}>
                  {scoreEntry.score} pts
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
