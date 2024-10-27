// context/UserContext.tsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  name: string;
  avatar: string;
}

const UserContext = createContext<User | null>(null);

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const userId = localStorage.getItem("user-id");
      if (!userId) return;

      try {
        const res = await fetch(`/api/user`, {
          headers: { "user-id": userId },
        });
        
        if (res.ok) {
          const data = await res.json();
          setUser(data.user); // Populate user data
        } else {
          // Redirect to home if fetching fails
          router.push("/");
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
