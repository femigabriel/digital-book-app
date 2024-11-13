import React from "react";
import { SelSkillBuildingHero } from "./SelSkillBuildingHero";
import { TeacherZoneHeader } from "../teacher-zone/TeacherZoneHeader";

export const SelSkillBuilding = () => {
  return (
    <div>
      <div className="w-full">
        <TeacherZoneHeader />
        <div>
          <SelSkillBuildingHero />
        </div>
      </div>
    </div>
  );
};
