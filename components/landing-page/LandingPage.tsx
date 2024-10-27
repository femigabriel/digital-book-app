import React from "react";
import { HeroPage } from "./HeroPage";
import { OnePlatform } from "./OnePlatform";
import { Experiences } from "./Experiences";
import { EasyAccess } from "./EasyAccess";
import { PersonalDev } from "./PersonalDev";
import { Layout } from "../Layout/Layout";

export const LandingPage: React.FC = () => {
  return (
    <Layout>
      <Section className="hero h-screen bg-[#FFFEE9]">
        <HeroPage />
      </Section>
      <Section className="platform bg-[#FDBFAF] h-screen">
        <OnePlatform />
      </Section>
      <Section className="experiences bg-[#FF98BB] h-screen">
        <Experiences />
      </Section>
      <Section className="access bg-[#FFCF61] h-screen">
        <EasyAccess />
      </Section>
      <Section className="dev bg-[#85B67A] h-screen">
        <PersonalDev />
      </Section>
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
