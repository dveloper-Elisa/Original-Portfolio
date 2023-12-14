import Batton from "../componets/button";
import { Link } from "react-router-dom";

let color = "bg-blue-600";
let color1 = "bg-gray-400";
let contact = "Get my cv";
let contact1 = "About me";

const Home = (pros) => {
  return (
    <>
      <div
        className={`flex flex-col lg:flex-row md:flex-row
        justify-between
        sm:flex-col ${pros.darkmode ? "bg-slate-900" : "bg-slate-200"}  px-16 ${
          pros.colors
        }`}
      >
        <div className="flex flex-col text-center gap-5">
          <p className="text-[2rem] lg:text-[5rem] md:text-[5rem] smd:text-[2rem]  text-blue-600 font-serif">
            <span className="font-serif font-thin text-[1rem] lg:text-[3rem] md:text-[3rem] smd:text-[1rem] ">
              This is
            </span>
            <br />
            Kwizera ELisa
          </p>
          <p className="text-4xl first-letter:uppercase font-serif text-center animate-pulse capitalize lg:text-[5xl] md:text-[5xl] sm:text-[2xl] ">
            a full stack Web developer
          </p>
          <div className=" font-serif tracking-wider first-letter:uppercase">
            i am specialised in different programming languages <br />I have
            turned into fullstack web developer
          </div>

          <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col justify-around gap-3">
            <Link
              to="https://drive.google.com/file/d/17lswhfS0Pc_jHB6HGR6uvOpvV5P5U1mx/view?usp=drive_link"
              target="_blank"
            >
              <Batton color={color} contact={contact} />
            </Link>
            <Link to="/about">
              <Batton color={color1} contact={contact1} />
            </Link>
            <Link to="https://github.com/dveloper-Elisa" target="_blank">
              <i className="fa fa-github-square text-[40px]"></i>
            </Link>
          </div>
        </div>

        {/* image devission */}

        <div className="flex flex-col items-center mr-11 py-4 transition-all duration-1000 animate-spin-custom hover:scale-105">
          <picture>
            <img
              src="./righted_position-removebg-preview.png"
              alt="image not found"
              className=" max-w-[28vw] border border-blue-300 shadow-2xl z-0 rounded-full"
            />
          </picture>
        </div>
      </div>
    </>
  );
};

export default Home;
