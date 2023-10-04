import { useEffect } from "react";
import { useState } from "react";

const Card = (pros) => {
  const [darkmode, setDarkMode] = useState(true);
  useEffect(() => {
    setDarkMode(false);
  }, []);
  return (
    <>
      <div className="text-lack max-w-[50%]">
        <div
          className={` ${
            darkmode
              ? "bg-slate-800 grid grid-cols-1 p-2 gap-3 dark:bg-slate-800 text-white ring-slate-900/5 items-center lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 rounded-xl shadow-xl"
              : "grid grid-cols-1  bg-gray-400 p-2 gap-3 items-center lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 rounded-xl"
          }`}
        >
          <div className="">
            <img
              src="./mongodb.png"
              alt="database not found"
              className="rounded-xl block md:block sm:hidden"
            />
          </div>
          <div className="flex flex-col lg:gap-8 md:gap-6 sm:gap-2">
            <div className="flex justify-center">
              <h5 className="uppercase rounded font-mono text-[20px] bg-gray-500  w-fit px-3">
                Database
              </h5>
            </div>
            <p className="font-antiqua ">
              Builiding Microservices With Dropwozard, MongoDB &Docker
            </p>
            <div className="flex items-center gap-10  justify-end">
              <p className="font-mono">{pros.name}</p>
              <p className="text-[10px] tracking-widest text-white">
                12/10/2023
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
