import { useUser } from "@/context/UserContext";
import { Card, Divider } from "antd";
import React from "react";

// Define the color and title mappings for activities
const activityColors = [
  { color: "bg-[#C9A9E9]" },
  { color: "bg-pink-500" },
  { color: "bg-blue-500" },
  { color: "bg-green-500" },
  { color: "bg-red-500" },
  { color: "bg-yellow-500" },
  { color: "bg-indigo-500" }, // Example new activity
  { color: "bg-teal-500" }, // Example new activity
  { color: "bg-orange-500" }, // Example new activity
  { color: "bg-gray-500" }, // Example new activity
];

export default function ScoreHighlight() {
  const user = useUser();

  if (!user || !user.scores || user.scores.length === 0) {
    return <div>No scores available.</div>;
  }

  return (
    <div className="w-full px-10">
      <h2 className="text-2xl font-bold mt-4">Score Highlight</h2>

      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
          {user.scores.map((scoreEntry, index) => {
            const activity = activityColors[index];
            if (!activity) return null;

            return (
              <div
                key={index}
                className="rounded-lg bg-[#F8F8F8] shadow-lg flex flex-col"
                style={{ width: "100%" }}
              >
                <div className="flex items-center">
                  {/* Left bar with specific color based on activity */}
                  <div
                    className={`w-6 h-full ${activity.color} rounded-l-lg`}
                  />
                  <div className="flex justify-between w-full px-5">
                    {/* Display the activity name from the db */}
                    <h3 className="font-semibold text-lg uppercase p-4 py-0 my-4">
                      {scoreEntry.activityName}
                    </h3>
                    <span
                      className="text-sm font-semibold flex justify-center items-center"
                      style={{ color: activity.color }}
                    >
                      {scoreEntry.score * 100} pts
                    </span>
                  </div>
                </div>

                <Divider className="my-0" />

                <div className="flex justify-between items-center p-4 w-full">
                  <p>300 pts maximum</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
