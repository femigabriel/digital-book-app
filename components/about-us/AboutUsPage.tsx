import React from "react";

import { Layout } from "../Layout/Layout";
import { AboutUsHero } from "./AboutUsHero";
import { WhoWeAre } from "./WhoWeAre";
import { HowItWorks } from "./HowItWorks";
import { AssessmentTracking } from "./AssessmentTracking";

export const AboutUsPage = () => {
  return (
    <Layout>
      <Section className=" h-screen">
        <AboutUsHero />
      </Section>
      <section className="bg-[#D9E6FF]  w-full">
        <WhoWeAre />
      </section>
      <section className="bg-[#3D3B3C]  w-full">
        <HowItWorks />
      </section>
      <section className="bg-[#826564]  w-full">
        <AssessmentTracking />
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
