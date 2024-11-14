// import React from "react";
// import { SelSkillBuildingHero } from "./SelSkillBuildingHero";
// import { TeacherZoneHeader } from "../teacher-zone/TeacherZoneHeader";

// export const SelSkillBuilding = () => {
//   return (
//     <div>
//       <div className="w-full">
//         <TeacherZoneHeader />
//         <div>
//           <SelSkillBuildingHero />
//         </div>
//       </div>
//     </div>
//   );
// };


import React from "react";

import { Layout } from "../Layout/Layout";
import { SelSkillBuildingHero } from "./SelSkillBuildingHero";
import { SelAndLiteratures } from "./SelAndLiteratures";
import { WhySel } from "./WhySel";


export const SelSkillBuildingPage = () => {
  return (
    <Layout>
      <Section className=" h-full">
         <SelSkillBuildingHero /> 
      </Section>
      <section className="bg-[#CFC9FD] h-full  w-full">
        <SelAndLiteratures />
      </section>
      <section className="bg-[#002C51] h-full  w-full">
        <WhySel />
      </section>
   
    </Layout>
  );
};

interface SectionProps {
  children: React.ReactNode;
  className: string;
}

const Section: React.FC<SectionProps> = ({ children, className }) => {
  return <div className={`w-full ${className}`}>{children}</div>;
};
