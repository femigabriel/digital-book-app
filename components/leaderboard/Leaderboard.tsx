import React, { useEffect, useState } from "react";
import { Avatar } from "antd";
import { TrophyOutlined } from "@ant-design/icons";
import Image from "next/image";
import { LeaderboardHeader } from "./LeaderboardHeader";

// Type for leaderboard data
interface LeaderboardUser {
  rank: number;
  name: string;
  points: number;
  avatar: string;
  bgColor: string;
}

export default function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardUser[]>([]);

  useEffect(() => {
    // Fetch the leaderboard data
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch("/api/leaderboard"); // Adjust to your actual endpoint path
        const data = await response.json();
        if (data.users) {
          const formattedData = data.users.map((user: any, index: number) => ({
            rank: index + 1,
            name: user.name,
            points: user.scores.total, // Assuming 'total' is the field holding the score
            avatar: user.avatar || "", // Optional: provide a fallback if avatar doesn't exist
            bgColor:
              index === 0
                ? "bg-yellow-400"
                : index === 1
                ? "bg-green-300"
                : index === 2
                ? "bg-amber-300"
                : "bg-white", // Set white background for ranks beyond 3
          }));
          setLeaderboardData(formattedData);
        }
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className="">
     <div className="score-header">
     <LeaderboardHeader />
     </div>
   <div className="w-full activites h-screen">
   <div className="px-4 py-8 max-w-6xl mx-auto ">
        <h2 className="text-3xl font-bold mb-6">Leaderboard</h2>
        <div className="space-y-4">
          {" "}
          {/* Space between cards */}
          {leaderboardData.map((user) => (
            <div
              key={user.rank}
              className={`flex items-center p-4 rounded-lg shadow-lg ${
                user.bgColor
              } ${user.rank <= 3 ? "" : "text-gray-800"}`}
              style={{
                width: "100%", // Full width
                maxWidth: "1000px", // Max width for readability
              }}
            >
              {/* Rank and Icon */}
              <div className="flex justify-center items-center w-10 h-10 rounded-full mr-4 bg-opacity-75">
                {user.rank <= 3 ? (
                 <div className="bg-[#9B59B6] rounded-full w-10 h-10 flex justify-center items-center">
                   <TrophyOutlined
                    style={{
                      fontSize: "24px",
                      color:
                        user.rank === 1
                          ? "#FFD700" // Gold for 1st place
                          : user.rank === 2
                          ? "#C0C0C0" // Silver for 2nd place
                          : "#CD7F32", // Bronze for 3rd place
                    }}
                  />
                  </div>
                ) : (
                  <span className="text-xl font-bold">{user.rank}</span>
                )}
              </div>

              {/* Avatar */}
              <Avatar
                size={50}
                icon={
                  <Image
                    src={`/avatar/${user.avatar}`}
                    alt="User Avatar"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                }
                className={`mr-4 ${
                  user.rank <= 3 ? "bg-opacity-75" : "bg-gray-200"
                }`}
              />

              {/* User Details */}
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">{user.name}</h3>
              </div>

              {/* Points */}
              <div className="text-lg font-semibold">{user.points}</div>
            </div>
          ))}
        </div>
      </div>
   </div>
    </div>
  );
}
