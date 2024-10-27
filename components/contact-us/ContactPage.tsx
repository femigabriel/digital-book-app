import React from "react";

import { Layout } from "../Layout/Layout";
import { ContactUsHero } from "./ContactUsHero";
import { ContactForm } from "./ContactForm";


export const ContactPage = () => {
  return (
    <Layout>
      <Section className=" h-screen">
        <ContactUsHero />
      </Section>
      <section className="bg-[#FFFDDA]  w-full">
        <ContactForm />
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
