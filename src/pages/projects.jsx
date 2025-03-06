import { useEffect, useState } from "react";
import projectArray from "../data/data";
import Card from "../componets/cardDevision";

const Project = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    setProject(projectArray);
  }, []);

  return (
    <div id="projects" className="bg-slate-800">
      <div className="text-center bg-zinc-900 rounded-lg my-10 w-full">
        <p className="font-bold tracking-wider py-10 text-[1.5rem]">
          Potfolio Project
        </p>
      </div>
      <div className="flex items-center justify-center w-full">
        <div
          className={`grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 
          bg-slate-900 w-[80%]`}
        >
          {project.map((proj) => {
            return (
              <>
                <Card
                  name={proj.name}
                  lang1={proj.lang1}
                  lang2={proj.lang2}
                  lang3={proj.lang3}
                  lang4={proj.lang4}
                  image={proj.image}
                  link={proj.link}
                  date={proj.date}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
