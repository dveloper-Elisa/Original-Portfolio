import Batton from "../componets/button";
import { Link } from "react-router-dom";
import About from "./aboutme";

const Home = () => {
  return (
    <>
    <div className="flex flex-col items-center h-screen w-full justify-evenly">
      <div className="flex items-center w-[63rem] justify-between">
        {/* RIGHT SECTION */}
        <div className="w-1/3">
          <div>
            <p className="">
              <p className="text-[2rem]">I'm </p>
              <br />
              <p className="font-extrabold text-[2.5rem] mb-5">Elisa Kwizera</p>
            </p>
            <hr className="w-1/2 h-[5px] border-none bg-yellow-500" />
            <p className="flex-wrap mt-5 line-clamp-10">
              A full-stack Developer, who developes mobile application, web
              application, and progressive web apllication. desigin UI,UX, with
              more than 3years of experience
            </p>
          </div>
        </div>

        {/* CENTER SECTION */}
        <div className="absolute left-[31.5rem]">
          <img
            src="./resized.png"
            alt="welcome profile"
            className="w-[30rem] rounded-full z-50"
          />
        </div>

        {/* LEFT SECTION */}
        <div className="w-1/3">
          <div>
            <p className="font-light text-lg mb-5">Services</p>
            <p>
              We build qualited products with software development, to make our
              cutomers smile
            </p>

            <p className="flex items-center justify-evenly mt-5">
              <Link
                to={"https://web.facebook.com/kwizera.elissa.14"}
                target="_blank"
                className=""
              >
                <i className="fa fa-facebook text-yellow-500 rounded-full bg-slate-500 p-4 w-5 h-5 flex items-center justify-center">
                  {" "}
                </i>
              </Link>
              <Link to={"https://x.com/KwizersE"} target="_blank" className="">
                <i className="fa fa-twitter text-yellow-500 rounded-full bg-slate-500 p-4 w-5 h-5 flex items-center justify-center">
                  {" "}
                </i>
              </Link>
              <Link
                to={"https://www.instagram.com/kwizeraelissa369/"}
                target="_blank"
                className=""
              >
                <i className="fa fa-instagram text-yellow-500 rounded-full bg-slate-500 p-4 w-5 h-5 flex items-center justify-center">
                  {" "}
                </i>
              </Link>
              <Link
                to={"https://wa.me/250787647168"}
                target="_blank"
                className=""
              >
                <i className="fa fa-whatsapp text-yellow-500 rounded-full bg-slate-500 p-4 w-5 h-5 flex items-center justify-center">
                  {" "}
                </i>
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="w-[63rem] bg-slate-800 p-5">
        <div className="flex items-center justify-between gap-5">
          <div className="rounded-sm bg-slate-600 p-2">
            <img src="./Picture1.png" alt="Tyaza limted" className="w-20" />
          </div>
          <div className="rounded-sm bg-slate-600 p-2">
            <img src="./download.jpeg" alt="Tyaza limted" className="w-20 h-6" />
          </div>
          <div className="rounded-sm bg-slate-600 p-2">
            <img src="./qt=q_95.webp" alt="Tyaza limted" className="w-20 h-6" />
          </div>
        </div>
        
      </div>
    </div>


    {/* WHAT I DO */}

    <div className="flex items-center w-[63rem]">

      <div>


      </div>

      {/* secodn div */}
      <div>
        
      </div>

    </div>
    </>
  );
};

export default Home;
