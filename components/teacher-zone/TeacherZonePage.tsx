import React from "react";
import { TeacherZoneHero } from "./TeacherZoneHero";
import { TeacherZoneHeader } from "./TeacherZoneHeader";


export const TeacherZonePage = () => {
  return (
    <div>
      <div className="w-full">
        <TeacherZoneHeader />
        <div>
          <TeacherZoneHero />
    
        </div>
      </div>
    </div>
  );
};
