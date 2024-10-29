import React from "react";
import { Introducton } from "./Introducton";
import { RelationshipSkillsHeader } from "./RelationshipSkillsHeader";
import { SkillsList } from "./SkillsList";
import { Activity1 } from "./Activity1";

export const RelationshipSkillsPage = () => {
  return (
    <div>
      <RelationshipSkillsHeader />
      <div className="div">
        <Introducton />
        <SkillsList />
        <Activity1 />
      </div>
    </div>
  );
};
