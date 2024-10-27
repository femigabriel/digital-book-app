"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface User {
  name: string;
  avatar: string;
}

const UserContext = createContext<User | null>(null);

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userId = localStorage.getItem("user-id"); // Make sure this key matches
        console.log("Retrieved User ID from localStorage:", userId);
    
        if (!userId) {
          console.error("User ID not found");
          return;
        }
    
        const res = await fetch(`/api/user`, {
          headers: { "user-id": userId }
        });
    
        console.log("API Response Status:", res.status);
    
        if (!res.ok) {
          console.error("Failed to fetch user data:", res.statusText);
          return;
        }
    
        const data = await res.json();
        console.log("Fetched User Data:", data);
        setUser(data.user); // Assuming the API response has the structure { user: { name, avatar } }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    
    fetchUser();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
