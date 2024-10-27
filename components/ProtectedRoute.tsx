// components/ProtectedRoute.tsx
"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "../context/UserContext";

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user === null) return; // Wait for user data to load
    if (!user) router.push("/"); // Redirect if user is not logged in
  }, [user, router]);

  return user ? <>{children}</> : null;
};
