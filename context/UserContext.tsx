"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Score {
  activityName: string;
  score: number;
  _id: string;
}

interface User {
  name: string;
  avatar: string;
  _id: string;
  scores: Score[];
}

interface Teacher {
  name: string;
  email: string;
  avatar: string;
  _id: string;
}

const UserContext = createContext<User | Teacher | null>(null);

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | Teacher | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const userId = localStorage.getItem("user-id");
      if (!userId) return;

      try {
        // First check if the user is a student
        const studentRes = await fetch(`/api/user`, {
          headers: { "user-id": userId },
        });

        const studentData = await studentRes.json();

        if (studentRes.ok && studentData.user) {
          // If the user is a student, set student data
          setUser(studentData.user);
        } else {
          // If not a student, check if the user is a teacher
          const teacherRes = await fetch(`/api/teacher/getTeachers`, {
            headers: { "user-id": userId },
          });

          const teacherData = await teacherRes.json();

          if (teacherRes.ok && teacherData.teachers) {
            // If the user is a teacher, set teacher data
            const teacher = teacherData.teachers.find((t: Teacher) => t._id === userId);
            setUser(teacher || null);
          } else {
            // Redirect if no valid data is found
            router.push("/");
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        router.push("/"); // Redirect on error
      }
    };

    fetchUser();
  }, [router]);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
