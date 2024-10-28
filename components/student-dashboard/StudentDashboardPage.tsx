import React from "react";
import { StudentDashboardHeader } from "./StudentDashboardHeader";
import { StudentDashboardHero } from "./StudentDashboardHero";
import { ProtectedRoute } from "../ProtectedRoute";
import { BooksList } from "./BooksList";

export const StudentDashboardPage = () => {
  return (
    <ProtectedRoute>
      <div className="w-full">
        <StudentDashboardHeader />
        <div>
          <StudentDashboardHero />
          <BooksList />
        </div>
      </div>
    </ProtectedRoute>
  );
};
