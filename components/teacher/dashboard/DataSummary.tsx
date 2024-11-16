import React, { useEffect, useState } from "react";
import {
  UserOutlined,
  BookOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

const DataSummary = () => {
  const [teacherCount, setTeacherCount] = useState<number>(0);
  const [studentCount, setStudentCount] = useState<number>(0);

  // Fetch data for teachers and students
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace these with actual API calls to fetch teacher and student counts
        const teacherResponse = await fetch("/api/teacher/getTeachers");
        const studentResponse = await fetch("/api/leaderboard"); // This endpoint gives user data

        const teacherData = await teacherResponse.json();
        const studentData = await studentResponse.json();

        console.log({ teacherData }, { studentData }); // Check the structure of both responses

        // Set teacher and student counts
        setTeacherCount(teacherData.teachers.length); // Ensure teacher data has 'teachers' array
        setStudentCount(studentData.users.length);   // Correctly use 'users' array for students
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const summaryItems = [
    {
      label: "Teachers",
      value: teacherCount,
      description: "Overall number of teachers",
      icon: <UserOutlined />,
      color: "bg-yellow-100",
    },
    {
      label: "Children",
      value: studentCount,
      description: "Overall number of children",
      icon: <UserOutlined />,
      color: "bg-blue-100",
    },
    {
      label: "All Users",
      value: teacherCount + studentCount,
      description: "Overall users",
      icon: <BookOutlined />,
      color: "bg-green-100",
    },
    {
      label: "Activities",
      value: 6,
      description: "Overall activities",
      icon: <AppstoreOutlined />,
      color: "bg-teal-100",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {summaryItems.map((item, index) => (
        <div
          key={index}
          className={`p-4 rounded shadow ${item.color} flex items-center`}
        >
          <div className="text-4xl mr-4">{item.icon}</div>
          <div>
            <p className="text-xl font-bold">{item.value}</p>
            <p className="text-gray-600">{item.label}</p>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataSummary;
