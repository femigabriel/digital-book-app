import React from "react";
import { StudentDashboardHeader } from "./StudentDashboardHeader";
import { StudentDashboardHero } from "./StudentDashboardHero";


export const StudentDashboardPage = () => {
  return (
    <div className="w-full">
     <StudentDashboardHeader />
      <div>
        <StudentDashboardHero />
      </div>
    </div>
  );
};
