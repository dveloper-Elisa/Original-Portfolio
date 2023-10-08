import SkillsFront from "../data/frontend";
import { useEffect, useState } from "react";
import SkillsBack from "../data/backend";

const Skillcomponent = (pros) => {
  const [frontend, setFrontend] = useState([]);
  const [backend, setbackend] = useState([]);

  useEffect(() => {
    setFrontend(SkillsFront);
    setbackend(SkillsBack);
  });

  return (
    <>
      <div
        className={`flex flex-row gap-2 ${
          pros.darkmode ? "bg-slate-900" : "bg-slate-300"
        }`}
      >
        <div
          className={`grid grid-cols-1   px-16 w-screen ${
            pros.darkmode ? "bg-slate-900" : "bg-slate-300"
          }`}
        >
          <div className="grid grid-cols-1  border-b-2 py-5 text-center text-[20px]">
            Ihave possesses a diverse skill set in the field of Full Stack Web
            Development, including proficiency in the following key areas:
          </div>
          <div className="flex justify-center py-5">
            <h3 className="text-[30px] text-blue-600 font-mono capitalize ">
              Front End related skills.
            </h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-8 border-b-2">
            {frontend.map((frontEnd, index) => {
              return (
                <>
                  <div className="flex flex-col items-center" key={index}>
                    <img
                      src={`./${frontEnd.image}`}
                      alt="Skill photo not found"
                      className="rounded-full w-[5rem] h-[5rem]"
                    />
                    <p className=" text-center first-letter:uppercase hidden lg:flex md:flex sm:hidden">
                      {frontEnd.content}
                    </p>
                  </div>
                </>
              );
            })}
          </div>

          <div className="flex justify-center py-5">
            <h3 className="text-[30px] text-blue-600 font-mono capitalize ">
              back End related skills.
            </h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-8 border-b-2">
            {backend.map((backEnd, index) => {
              return (
                <>
                  <div className="flex flex-col items-center" key={index}>
                    <img
                      src={`./${backEnd.image}`}
                      alt="Skill photo not found"
                      className="rounded-full w-[5rem] h-[5rem]"
                    />
                    <p className=" text-center first-letter:uppercase hidden lg:flex md:flex sm:hidden">
                      {backEnd.content}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skillcomponent;
