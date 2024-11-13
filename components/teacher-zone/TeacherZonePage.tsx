import React from "react";
import { StudentDashboardHeader } from "../student-dashboard/StudentDashboardHeader";
import { TeacherZoneHero } from "./TeacherZoneHero";


export const TeacherZonePage = () => {
  return (
    <div>
      <div className="w-full">
        <StudentDashboardHeader />
        <div>
          <TeacherZoneHero />
    
        </div>
      </div>
    </div>
  );
};
