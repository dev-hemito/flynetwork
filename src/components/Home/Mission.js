import { HiUsers } from "react-icons/hi";

const MissionStatement = () => {
  return (
    <div className=" text-white min-h-[200px] p-8 md:p-12 mt-2 md:mb-32 mb-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12">
        <div className="flex-shrink-0">
          <div className="md:bg-purple-800 p-4 rounded-full">
            <HiUsers className="w-32 h-32 md:w-16 md:h-16" />
          </div>
        </div>
        
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl md:text-3xl font-semibold text-left">
            Our Mission
          </h2>
          <p className="text-purple-100 text-sm md:text-base leading-relaxed text-justify">
            We strive to empower individuals to reach their full potential through innovative learning 
            solutions and community engagement. Our platform facilitates meaningful connections 
            between learners and industry experts, fostering growth and professional development 
            for the next generation of leaders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;