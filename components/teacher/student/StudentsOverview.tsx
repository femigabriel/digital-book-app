import React, { useState, useEffect } from "react";
import { Table, Tag, Avatar, Button, Input } from "antd";
import {
  EyeOutlined,
  SearchOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

interface LeaderboardUser {
  key: string;
  rank: number;
  name: string;
  grade: string; 
  activities: number;
  status: string;
  avatar: string;
  bgColor: string;
}

const StudentsOverview = () => {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>(""); // State for search term

  // Fetch the leaderboard data
  useEffect(() => {
    const fetchLeaderboard = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/leaderboard"); // Replace with your actual endpoint path
        const data = await response.json();
        console.log(data.users);
        if (data.users) {
          const formattedData = data.users.map((user: any, index: number) => {
            const activityCount = user.scores.length; // Number of activities completed
            return {
              key: user._id || index.toString(), // Ensure unique key
              rank: index + 1,
              name: user.name,
              grade: user.grade || "N/A", // Adjust or remove if grade is not relevant
              activities: activityCount, // Total number of activities
              status: activityCount >= 6 ? "Complete" : "Incomplete",
              avatar: user.avatar || "", // Optional: fallback avatar
              bgColor:
                index === 0
                  ? "bg-yellow-400"
                  : index === 1
                  ? "bg-green-300"
                  : index === 2
                  ? "bg-amber-300"
                  : "bg-white", // Set white background for ranks beyond 3
            };
          });
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

  // Filter leaderboard data based on the search term
  const filteredData = leaderboardData.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      render: (text: string) => <span className="font-bold">{text} Grade</span>,
    },

    {
      title: "Activities",
      dataIndex: "activities",
      key: "activities",
      render: (activities: number) => (
        <span className="font-bold">
          {activities.toString().padStart(2, "0")}
        </span>
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
      title: "Action",
      key: "action",
      render: () => (
        <div className="flex space-x-2 justify-center">
          <Button icon={<EyeOutlined />} />
          <Button icon={<EditOutlined />} />
          <Button icon={<DeleteOutlined />} />
        </div>
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
          <h3 className="text-2xl">Full list of all the students.</h3>
          <Input
            placeholder="Search"
            prefix={<SearchOutlined />}
            className="max-w-xs border-gray-300 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <Table
          columns={columns}
          dataSource={filteredData} // Use the filtered data
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
