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
          pros.darkmode ? "bg-slate-900" : "bg-slate-200"
        }  lg:grid-cols-2 px-16 gap-5 py-5`}
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
    </>
  );
};

export default Project;
