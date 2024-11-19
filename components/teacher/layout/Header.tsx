import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useUser } from "@/context/UserContext";

// const Header = () => {
//   const user = useUser(); // Get the logged-in user (teacher or student)
interface Teacher {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

const Header = () => {
  const [teacher, setTeacher] = useState<Teacher | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeacherDetails = async () => {
      try {
        const token = localStorage.getItem("authToken"); // Retrieve the token using the correct key
        // console.log("Token from localStorage:", token); // Log for debugging
        if (!token) {
          setError("No authentication token found.");
          return;
        }

        const response = await fetch("/api/teacher/getTeacherDetails", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch teacher details.");
        }

        const data = await response.json();
        // console.log(data.teacher);
        setTeacher(data.teacher);
      } catch (error: any) {
        setError(error.message || "An error occurred while fetching teacher details.");
      }
    };

    fetchTeacherDetails();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!teacher) {
    return <div>Loading...</div>;
  }

  return (
    <div className="fixed top-0 left-0 w-full z-10 flex justify-between items-center px-5 h-[90px] bg-white shadow">
      <div className="mt-5">
        <Link href="/teacher-dashboard" className="flex items-center justify-center">
          <Image src="/images/Logo.svg" alt="Logo" width={50} height={50} className="w-full max-w-[151px]" />
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <p>{teacher.firstName} {teacher.lastName}</p>
        <Avatar alt="User Avatar" size={40} icon={<UserOutlined />} />
      </div>
    </div>
  );
};



export default Header;
