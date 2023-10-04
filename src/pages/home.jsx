import Batton from "../componets/button";
import { Link } from "react-router-dom";

let color = "bg-blue-600";
let color1 = "bg-gray-400";
let contact = "Contact me";
let contact1 = "About me";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 bg-slate-200 px-16">
        <div className="flex flex-col text-center gap-5">
          <p className="text-[5rem] text-blue-600 font-serif">
            <span className="font-serif font-thin text-[3rem]">This is</span>
            <br />
            Kwizera ELisa
          </p>
          <p className="text-5xl first-letter:uppercase font-serif text-center animate-pulse">
            a full stack Web developer
          </p>
          <div className=" font-serif tracking-wider first-letter:uppercase">
            i am specialised in different programming languages <br />I have
            turned into fullstack web developer
          </div>
          <div className="flex justify-around">
            <Link to="/about">
              {" "}
              <Batton color={color} contact={contact} />{" "}
            </Link>
            <Link to="/about">
              {" "}
              <Batton color={color1} contact={contact1} />
            </Link>
          </div>
        </div>

        {/* image devission */}

        <div className="flex flex-col items-center">
          <img
            src="./Elisa.jpg"
            alt="image not found"
            className="rounded-full max-w-[28vw] border border-blue-300 shadow-2xl opacity-70 z-0"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
