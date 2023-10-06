import SkillsFront from "../data/frontend";
import { useEffect, useState } from "react";
import SkillsBack from "../data/backend";

const Skillcomponent = () => {
  const [frontend, setFrontend] = useState([]);
  const [backend, setbackend] = useState([]);

  useEffect(() => {
    setFrontend(SkillsFront);
    setbackend(SkillsBack);
  });

  return (
    <>
      <div className="grid grid-cols-1 bg-slate-300 px-16">
        <div className="grid grid-cols-1  border-b-2">
          Ihave possesses a diverse skill set in the field of Full Stack Web
          Development, including proficiency in the following key areas:
        </div>
        <div className="flex justify-center py-5">
          <h3 className="text-[30px] text-blue-600 font-mono capitalize ">
            Front End related skills.
          </h3>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-8 border-b-2">
          {frontend.map((frontEnd) => {
            return (
              <>
                <div className="flex flex-col items-center">
                  <img
                    src={`./${frontEnd.image}`}
                    alt="Skill photo not found"
                    className="rounded-full w-[5rem] h-[5rem]"
                  />
                  <p className=" text-center first-letter:uppercase">
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
          {backend.map((frontEnd) => {
            return (
              <>
                <div className="flex flex-col items-center">
                  <img
                    src={`./${frontEnd.image}`}
                    alt="Skill photo not found"
                    className="rounded-full w-[5rem] h-[5rem]"
                  />
                  <p className=" text-center first-letter:uppercase">
                    {frontEnd.content}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skillcomponent;
