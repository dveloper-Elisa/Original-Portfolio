import SkillsFront from "../data/frontend";
import { useEffect, useState } from "react";
import SkillsBack from "../data/backend";

const Skillcomponent = () => {
  const [frontend, setFrontend] = useState([]);
  const [backend, setBackend] = useState([]);

  useEffect(() => {
    setFrontend(SkillsFront);
    setBackend(SkillsBack);
  }, []); // Only run once on mount

  return (
    <div className="bg-slate-900 text-white py-10 px-4 md:px-16" id="skills">
      {/* Header */}
      <div className="text-center border-b border-slate-700 pb-5 mb-8">
        <p className="text-lg md:text-2xl font-semibold">
          Skills I have
        </p>
      </div>

      {/* Front End Skills Section */}
      <div className="py-5">
        <h3 className="text-2xl md:text-3xl text-yellow-500 font-mono text-center mb-6">
          Front-End Skills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {frontend.map((frontEnd, index) => (
            <div
              className="flex flex-col items-center p-4 bg-slate-800 rounded-xl shadow-lg hover:scale-105 transform transition duration-300"
              key={index}
            >
              <img
                src={frontEnd.image}
                alt="Skill photo not found"
                className="rounded-full w-20 h-20 mb-3"
              />
              <p className="text-center capitalize text-sm md:text-base">
                {frontEnd.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Back End Skills Section */}
      <div className="py-5 mt-8">
        <h3 className="text-2xl md:text-3xl text-yellow-500 font-mono text-center mb-6">
          Back-End Skills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {backend.map((backEnd, index) => (
            <div
              className="flex flex-col items-center p-4 bg-slate-800 rounded-xl shadow-lg hover:scale-105 transform transition duration-300"
              key={index}
            >
              <img
                src={backEnd.image}
                alt="Skill photo not found"
                className="rounded-full w-20 h-20 mb-3"
              />
              <p className="text-center capitalize text-sm md:text-base">
                {backEnd.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skillcomponent;
