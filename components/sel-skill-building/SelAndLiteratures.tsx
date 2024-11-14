import React from "react";
import Image from "next/image";

export const SelAndLiteratures: React.FC = () => {
  return (
    <div className="w-full h-full px-10 py-10 flex flex-col items-center">
      {/* Header Block */}
      <div className="flex justify-center items-center w-full">
        <Image
          src="/images/sel-Welcome Group.svg"
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
              SEL and Literature
            </h3>
            <p className="text-base md:text-base leading-relaxed">
              Unlock the transformative power of literature in your classroom!
              Every character in a story offers students a unique opportunity to
              step into someone else's shoes, fostering empathy in a way that
              few other methods can. By exploring the motivations of both heroes
              and villains, students can easily differentiate between positive
              and negative personality traits, helping them grasp what behaviors
              are acceptable and how they affect relationships. Through
              literature, students not only engage with compelling narratives
              but also reflect on their own behaviors as they identify with
              storybook characters. This exploration promotes vital
              relationship-building skills, as they learn to navigate complex
              social dynamics within the safe context of a story. Incorporating
              literature into your SEL curriculum isn't just about reading—it's
              about creating a space for self-discovery and growth. Equip your
              students with the tools they need to understand themselves and
              others, leading to stronger connections and a more harmonious
              classroom environment. Let's harness the power of storytelling to
              enhance social-emotional learning and prepare our students for a
              compassionate and connected future!
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
