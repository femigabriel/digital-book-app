import React, { useState, useEffect } from "react";
import { Table, Tag, Avatar, Button, Input } from "antd";
import { EyeOutlined, SearchOutlined } from "@ant-design/icons";

interface LeaderboardUser {
  key: string;
  rank: number;
  name: string;
  grade: string; // Add grade if it’s part of the data
  activities: number;
  status: string;
  avatar: string;
  bgColor: string;
}

const StudentsOverview = () => {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardUser[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch the leaderboard data
  useEffect(() => {
    const fetchLeaderboard = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/leaderboard"); // Replace with your actual endpoint path
        const data = await response.json();
        console.log(data.users)
        if (data.users) {
          const formattedData = data.users.map((user: any, index: number) => ({
            key: user.id || index.toString(), // Ensure unique key
            rank: index + 1,
            name: user.name,
            grade: user.grade || "N/A", // Adjust according to actual data fields
            activities: user.scores.activities || 0, // Assuming scores has activities count
            status: user.status || "Incomplete",
            avatar: user.avatar || "", // Optional: fallback avatar
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
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  const columns = [
    {
      title: "Users",
      dataIndex: "name",
      key: "name",
      render: (text: string, record: LeaderboardUser) => (
        <div className="flex items-center space-x-3">
          <Avatar
            src={`/avatar/${record.avatar}`}
            shape="square"
            size="large"
          />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Grades",
      dataIndex: "grade",
      key: "grade",
      render: (text: string) => <span className="font-bold">{text}</span>,
    },
    {
      title: "Activities",
      dataIndex: "activities",
      key: "activities",
      render: (text: number) => (
        <span className="font-bold">{text.toString().padStart(2, "0")}</span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag
          color={status === "Complete" ? "green" : "orange"}
          className="rounded-lg px-2 py-1"
        >
          {status}
        </Tag>
      ),
    },
    {
      title: "",
      key: "action",
      render: () => (
        <Button
          shape="circle"
          icon={<EyeOutlined />}
          style={{ backgroundColor: "#7C3AED", color: "white" }}
        />
      ),
    },
  ];

  return (
    <div className="p-6 bg-[#FEE7EF] min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-2">Students Overview</h2>
        <p className="text-gray-500 mb-6">
          View, manage, and track the progress of all students participating in
          SEL activities
        </p>

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">
            Full list of all the students.
          </h3>
          <Input
            placeholder="Search"
            prefix={<SearchOutlined />}
            className="max-w-xs border-gray-300 rounded-md"
          />
        </div>

        <Table
          columns={columns}
          dataSource={leaderboardData}
          pagination={false}
          bordered
          loading={loading}
          className="ant-table-custom rounded-lg overflow-hidden"
        />
      </div>
    </div>
  );
};

export default StudentsOverview;
