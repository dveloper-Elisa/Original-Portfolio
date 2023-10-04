import { useEffect } from "react";
import { useState } from "react";

const Card = (pros) => {
  const [darkmode, setDarkMode] = useState(true);
  useEffect(() => {
    setDarkMode(false);
  }, []);
  return (
    <>
      <div className="">
        <div
          className={` ${
            darkmode
              ? "bg-slate-800 grid grid-cols-1 p-2 gap-3 dark:bg-slate-800 text-white ring-slate-900/5 items-center lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 rounded-xl shadow-2xl"
              : "grid grid-cols-1  bg-gray-400 p-2 gap-3 items-center lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 rounded-2xl"
          }`}
        >
          <div className="">
            <img
              src={`./${pros.image}`}
              alt="database not found"
              className="rounded-xl  md:block sm:hidden"
            />
          </div>
          <div className="flex flex-col lg:gap-8 md:gap-6 sm:gap-2">
            <div className="flex justify-center">
              <h5 className="uppercase rounded font-mono text-[20px] bg-gray-500  w-fit px-3">
                {pros.name}
              </h5>
            </div>
            <p className="font-antiqua ">{pros.project}</p>
            <div className="flex items-center gap-10  justify-end">
              <p className="font-mono">Kwizera</p>
              <p className="text-[10px] tracking-widest text-white">
                {pros.date}
              </p>
              <p
                id="dack"
                className="cursor-pointer"
                onClick={() => {
                  darkmode ? setDarkMode(false) : setDarkMode(true);
                }}
              >
                Dack
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
