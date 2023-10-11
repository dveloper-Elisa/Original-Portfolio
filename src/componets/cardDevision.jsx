import { Link } from "react-router-dom";

const Card = (pros) => {
  return (
    <>
      <div className="">
        <Link to={`${pros.link}`} target="_blank">
          <div
            className={`grid grid-cols-1  bg-slate-700  p-2 gap-3 items-center lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 rounded-2xl`}
          >
            <div className="">
              <img
                src={`./${pros.image}`}
                alt="database not found"
                className="rounded-xl flex lg:flex md:flex sm:hidden"
              />
            </div>
            <div className="flex  flex-col lg:gap-8 md:gap-6 sm:gap-2">
              <div className="flex justify-center">
                <h5 className="uppercase rounded font-mono text-[20px] bg-gray-500  w-fit px-3">
                  {pros.name}
                </h5>
              </div>
              <div className=" flex gap-2 flex-wrap p-2">
                <p className="font-antiqua bg-slate-500 text-white px-1 max-w-fit">
                  {pros.lang1}
                </p>
                <p className="font-antiqua bg-slate-500 text-white px-1 max-w-fit">
                  {pros.lang2}
                </p>
                <p className="font-antiqua bg-slate-500 text-white px-1 max-w-fit">
                  {pros.lang3}
                </p>
                <p className="font-antiqua bg-slate-500 text-white px-1 max-w-fit">
                  {pros.lang4}
                </p>
              </div>
              <div className="flex items-center gap-10  justify-end">
                <p className="font-mono text-white">
                  Completed on: {pros.date}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
