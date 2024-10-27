import React from "react";
import Image from "next/image";

export const WhoWeAre: React.FC = () => {
  return (
    <div className="w-full  px-10 py-10 flex flex-col items-center">
      {/* Header Block */}
      <div className="flex justify-center items-center w-full">
        <Image
          src="/images/Welcome Group.svg"
          alt="Logo"
          width={50}
          height={50}
          className="w-full max-w-[85%] h-auto"
          draggable="false"
        />
      </div>

      {/* Content Section */}
      <div className=" flex flex-col md:flex-row justify-between items-center mt-10 px-10 md:px-20 py-4 w-full max-w-[1200px]">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          <div className="max-w-[678px] text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Who We Are
            </h3>
            <p className="text-base md:text-base leading-relaxed">
              Three Paths LLC is committed to empowering educators by providing
              accessible classroom materials designed to enhance
              social-emotional learning (SEL) skills. We recognize the
              challenges teachers face in their busy schedules, often leaving
              little time to address complex student behaviors. Our mission is
              to support you by offering simple, easy-to-use lessons and
              engaging games that focus on specific SEL competencies. Each
              resource is thoughtfully crafted to introduce and clarify
              essential SEL skills, enabling students to participate in
              activities that help them identify, learn, and apply effective
              behavioral solutions. This approach not only fosters student
              understanding but also creates opportunities for teachers and
              students to reinforce SEL skills in everyday classroom
              interactions. With Three Paths, educators can cultivate a more
              supportive and effective learning environment, helping every
              student thrive.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="max-w-md">
            <Image
              src="/images/20.svg"
              alt="Engaging Reading"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
