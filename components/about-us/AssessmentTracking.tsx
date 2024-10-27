import React from "react";
import Image from "next/image";

export const AssessmentTracking: React.FC = () => {
  return (
    <div className="w-full px-10 py-10 flex flex-col items-center">
      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 px-10 md:px-20 py-7 w-full max-w-[1200px]">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          <div className="max-w-[678px] text-center md:text-left">
            <h3 className="text-xl md:text-xl font-bold leading-tight mb-6 text-white">
              Assessment and Progress Tracking:
            </h3>
            <ul className="text-base md:text-base  leading-relaxed text-[#E0E0E0] list-disc list-inside mb-6">
              <li><strong>Pre-Testing:</strong> Assess students' SEL skills at the beginning of the program.</li>
              <li><strong>Ongoing Monitoring:</strong> Track improvements in each SEL skill after every 5 lessons.</li>
              <li><strong>Post-Testing:</strong> Conduct a post-test to evaluate skill development and understanding.</li>
            </ul>

            <h4 className="text-xl font-bold text-white mb-4">Resources for Educators:</h4>
            <ul className="text-base md:text-base leading-relaxed text-[#E0E0E0] list-disc list-inside mb-6">
              <li><strong>Score Page Access:</strong> Monitor each student’s progress through a dedicated Score page.</li>
              <ul className="list-disc list-inside mb-4 pl-6">
                <li>Review individual performance</li>
                <li>Provide targeted suggestions for improvement</li>
              </ul>
            </ul>

            <h4 className="text-xl font-bold text-white mb-4">Next Steps:</h4>
            <p className="text-base md:text-base text-[#E0E0E0] leading-relaxed">
              After reviewing this introduction, please take a moment to familiarize yourself with the SEL definitions used in the Charlie Activities and Lessons.
              Thank you for your commitment to enhancing your students' social and emotional learning. We're excited to partner with you on this journey!
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="max-w-md">
            <Image
              src="/images/19.svg"
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
