import React from "react";
import { ActivitiesHeader } from "./ActivitiesHeader";
import { ActivitiesHero } from "./ActivitiesHero";

export const ActivitiesPage = () => {
  return (
    <div className="w-full">
      <ActivitiesHeader />
      <div>
        <ActivitiesHero />
      </div>
    </div>
  );
};
