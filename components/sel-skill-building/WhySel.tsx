import React from "react";
import Image from "next/image";

export const WhySel: React.FC = () => {
  return (
    <div className="w-full h-full px-10 py-10 flex flex-col items-center">
      {/* Header Block */}

      {/* Content Section */}
      <div className=" flex flex-col md:flex-row justify-between items-center mt-10 px-10 md:px-20 py-4 w-full max-w-[1200px]">
        {/* Image Section */}
        <div className="w-full md:w-1/2  md:justify-end">
          <div className="max-w-md">
            <Image
              src="/images/27.svg"
              alt="Engaging Reading"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-white flex justify-center md:justify-start mb-8 md:mb-0">
          <div className="max-w-[678px] text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Why Social-Emotional Learning (SEL) is Important
            </h3>
            <p className="text-base md:text-base leading-relaxed">
              Imagine this: you’re having a rough day at school. You forgot your
              homework, your friends are busy, and you spilled juice all over
              your favorite shirt. Frustrating, right? This is where
              Social-Emotional Learning, or SEL, can help you out!
            </p>
            <p className="text-base md:text-base leading-relaxed my-5">
              SEL skills help you handle difficult situations like these by
              teaching you how to identify and manage your feelings. It’s like
              having a special tool kit to help you with any tough emotions you
              face, whether you’re sad, angry, or nervous. When you practice
              SEL, it becomes easier to know exactly what you’re feeling and
              what to do about it. Sometimes, when things don’t go our way, we
              might feel like losing control. But SEL skills remind us to pause
              and think before we react. This helps us avoid angry outbursts or
              choices we might regret later. Instead, we learn to respond in
              ways that make us proud of ourselves.
            </p>
            <p className="text-base md:text-base leading-relaxed ">
              When you practice SEL, you’re not just learning how to stay
              calm—you’re also building a feeling of happiness inside. Knowing
              how to manage your emotions makes you feel good about yourself and
              helps you have positive relationships with others. So, next time
              you face a challenge, remember that with SEL skills, you’re
              equipped to handle anything that comes your way!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
