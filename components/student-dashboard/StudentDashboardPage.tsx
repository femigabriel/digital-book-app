import React from "react";
import { StudentDashboardHeader } from "./StudentDashboardHeader";
import { StudentDashboardHero } from "./StudentDashboardHero";
import { ProtectedRoute } from "../ProtectedRoute";

export const StudentDashboardPage = () => {
  return (
    <ProtectedRoute>
      <div className="w-full">
        <StudentDashboardHeader />
        <div>
          <StudentDashboardHero />
        </div>
      </div>
    </ProtectedRoute>
  );
};
