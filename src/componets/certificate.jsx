import { Link } from "react-router-dom";
const Certificates = (pros) => {
  return (
    <>
      <div className="flex flex-col bg-slate-700 p-1 m-1 max-w-fit rounded">
        <Link to={`${pros.link}`} target="_blank">
          <div className=" items-center hover:bg-slate-700 hover:text-white hover:transition-in duration-[2s]">
            <img
              src={`./cirtificate/${pros.image}`}
              alt="certificate not found"
              className=""
            />
            <p className="text-center text-white hover:text-white w-auto">
              {pros.description}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Certificates;
