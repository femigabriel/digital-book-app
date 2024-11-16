import React, { useEffect, useState } from "react";
import { Input, Avatar, Tabs, Table, Button, message } from "antd";
import {
  SearchOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  UserOutlined,
} from "@ant-design/icons";

interface StudentData {
  key: string;
  rank: number;
  name: string;
  grade: string;
  activities: number;
  status: string;
  avatar: string;
  bgColor: string;
}

interface TeacherData {
  key: string;
  name: string;
  email: string;
  date: string;
}

const RecentUsers = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [studentsData, setStudentsData] = useState<StudentData[]>([]);
  const [teachers, setTeachers] = useState<TeacherData[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch the student's data
  useEffect(() => {
    const fetchLeaderboard = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/leaderboard");
        const data = await response.json();
        console.log(data );
        if (data.users) {
          const formattedData = data.users.map((user: any, index: number) => {
            const activityCount = user.scores.length;
            return {
              key: user._id || index.toString(),
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
          setStudentsData(formattedData);
        }
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  // Fetch the Teacher's data
  useEffect(() => {
    const fetchTeachers = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/teacher/getTeachers");
        const data = await response.json();
        console.log(data.teachers);

        if (response.ok) {
          // Combine firstName and lastName for teachers
          const formattedTeachers = data.teachers.map((teacher: any) => ({
            key: teacher._id,
            name: `${teacher.firstName} ${teacher.lastName}`,
            email: teacher.email,
            date: teacher.createdAt || "N/A",
          }));
          setTeachers(formattedTeachers);
        } else {
          message.error(data.error || "Failed to fetch teachers.");
        }
      } catch (error) {
        console.error("Error fetching teachers:", error);
        message.error("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  // Combine teacher and student data for "All" tab
  const allUsers = [...studentsData, ...teachers];

  // Filter users based on the active tab
  const filteredUsers = allUsers.filter((user) =>
    activeTab === "All"
      ? true
      : activeTab === "Students"
      ? studentsData.some((student) => student.name === user.name)
      : teachers.some((teacher) => teacher.name === user.name)
  );

  const columns = [
    {
      title: "Image",
      dataIndex: "avatar",
      key: "avatar",
      render: (avatar: string) => (
        <Avatar
          size={40}
          icon={avatar ? <img src={`/avatar/${avatar}`} /> : <UserOutlined />}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    // {
    //   title: "Email",
    //   dataIndex: "email",
    //   key: "email",
    //   render: (email: string) => email || "N/A",
    // },
    // {
    //   title: "Date",
    //   dataIndex: "date",
    //   key: "date",
    //   render: (date: string) => date || "N/A",
    // },
    {
      title: "Action",
      key: "action",
      render: () => (
        <div className="flex space-x-2 justify-center">
          <Button icon={<EyeOutlined />} />
          <Button icon={<EditOutlined />} />
          <Button icon={<DeleteOutlined className="text-red-500" />} />
        </div>
      ),
    },
  ];

  return (
    <div className="p-4 bg-white rounded shadow recent-users">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Recent Users</h3>
        <Input
          placeholder="Search"
          prefix={<SearchOutlined />}
          className="w-1/3"
        />
      </div>
      <Tabs
        defaultActiveKey="All"
        onChange={(key) => setActiveTab(key)}
        type="card"
      >
        <Tabs.TabPane tab="All" key="All" />
        <Tabs.TabPane tab="Teachers" key="Teachers" />
        <Tabs.TabPane tab="Students" key="Students" />
      </Tabs>
      <Table
        columns={columns}
        dataSource={filteredUsers}
        rowKey={(record) => record.key}
        pagination={{ pageSize: 5 }}
        className="mt-4"
        loading={loading}
      />
    </div>
  );
};

export default RecentUsers;
