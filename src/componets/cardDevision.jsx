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
                className="rounded-xl  md:block sm:hidden"
              />
            </div>
            <div className="flex flex-col lg:gap-8 md:gap-6 sm:gap-2">
              <div className="flex justify-center">
                <h5 className="uppercase rounded font-mono text-[20px] bg-gray-500  w-fit px-3">
                  {pros.name}
                </h5>
              </div>
              <p className="font-antiqua bg-slate-500 rounded-lg text-white px-1 max-w-fit">
                {pros.project}
              </p>
              <div className="flex items-center gap-10  justify-end">
                <p className="font-mono text-white">Kwizera</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
