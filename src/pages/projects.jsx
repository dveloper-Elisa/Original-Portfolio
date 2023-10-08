import { useEffect, useState } from "react";
import projectArray from "../data/data";
import Card from "../componets/cardDevision";

const Project = (pros) => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    setProject(projectArray);
  }, []);

  return (
    <>
      <div
        className={`grid grid-cols-1 items-center md:grid-cols-2 ${
          pros.darkmode ? "bg-slate-900" : "bg-slate-300"
        }  lg:grid-cols-2 px-16 gap-5 py-5`}
      >
        {project.map((proj) => {
          return (
            <>
              <Card
                name={proj.name}
                project={proj.project}
                image={proj.image}
                link={proj.link}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Project;
