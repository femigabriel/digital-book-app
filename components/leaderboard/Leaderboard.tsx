import React from "react";
import { Avatar } from "antd";
import { TrophyOutlined, UserOutlined } from "@ant-design/icons";

// Sample leaderboard data
const leaderboardData = [
  { rank: 1, name: "SilverStream22", points: 2200, bgColor: "bg-yellow-400" },
  { rank: 2, name: "SilverStream22", points: 2140, bgColor: "bg-green-300" },
  { rank: 3, name: "SilverStream22", points: 2100, bgColor: "bg-amber-300" },
  { rank: 4, name: "CrimsonWave23", points: 2000, bgColor: "bg-white" },
  { rank: 5, name: "RubyCliff29", points: 1400, bgColor: "bg-white" },
  { rank: 6, name: "VioletHorizon25", points: 1200, bgColor: "bg-white" },
  { rank: 7, name: "EmeraldPath18", points: 770, bgColor: "bg-white" },
  { rank: 8, name: "AmberField27", points: 720, bgColor: "bg-white" },
  { rank: 9, name: "TurquoiseBay19", points: 650, bgColor: "bg-white" },
];

export default function Leaderboard() {
  return (
    <div className="px-6 py-8 max-w-lg mx-auto">
      <h2 className="text-3xl font-bold mb-6">Leaderboard</h2>
      <div className="space-y-4">
        {leaderboardData.map((user) => (
          <div
            key={user.rank}
            className={`flex items-center rounded-lg p-4 shadow-lg ${user.bgColor} ${
              user.rank <= 3 ? "text-white" : "text-gray-800"
            }`}
          >
            {/* Rank and Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full mr-4 bg-opacity-75">
              {user.rank <= 3 ? (
                <TrophyOutlined
                  style={{
                    fontSize: "24px",
                    color:
                      user.rank === 1 ? "#FFD700" : user.rank === 2 ? "#C0C0C0" : "#CD7F32",
                  }}
                />
              ) : (
                <span className="text-xl font-bold">{user.rank}</span>
              )}
            </div>

            {/* Avatar */}
            <Avatar
              size={48}
              icon={<UserOutlined />}
              className={`mr-4 ${user.rank <= 3 ? "bg-opacity-75" : "bg-gray-200"}`}
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
  );
}
