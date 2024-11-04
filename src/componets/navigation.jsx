import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [isclosed, setIsclosed] = useState(true);

  return (
    <>
      <div
        className={`flex flex-row items-center justify-evenly sticky bg-blend-darken shadow-xl top-0 z-10 max-w-[100vw]`}
      >
        <div className="flex items-center justify-between gap-10">
          {/* <img src="./logo.png" alt="Logo Not found" className="w-[4rem] " /> */}
          <div><p className="font-bold font-sans p-[1rem]"> <i className="fa fa-file-picture-o"></i> Elisa Developer</p></div>

          <div>
          <nav
          className={`flex flex-col lg:flex-row md:flex md:flex-row justify-end w-fit font-light`}
        >
          <i
            className={`border text-[20px] w-fit p-1 fa cursor-pointer fa-close ${
              isclosed ? "hidden" : "mx-16 block w-fi"
            }`}
            onClick={() => {
              setIsclosed(true);
            }}
          ></i>
          <i
            className={`border text-[20px] w-fit p-1 fa cursor-pointer fa-bars md:hidden lg:hidden ${
              isclosed ? " mx-16 block w-fit  top-0" : "hidden"
            }`}
            onClick={() => {
              setIsclosed(false);
            }}
          ></i>
          <ul
            className={`md:flex text-white md:flex-row md:gap-5 ${
              isclosed
                ? "hidden"
                : "flex flex-col gap-5 h-screen w-[80%] mx-16 bg-slate-600 p-1 md:bg-slate-400 absolute -left-16 top-16"
            }`}
          >
            <Link
              to="/"
              onClick={() => {
                setIsclosed(true);
              }}
            >
              <li className="text-[18px] first-letter:uppercase  hover:transition hover:duration-500 ">
                Home
              </li>
            </Link>

            <Link
              to="/certificates"
              onClick={() => {
                setIsclosed(true);
              }}
            >
              <li className="text-[18px] first-letter:uppercase hover:text-white hover:transition hover:duration-500 hover:">
                Certificates
              </li>
            </Link>

            <Link
              to="/projects"
              onClick={() => {
                setIsclosed(true);
              }}
            >
              <li className="text-[18px] first-letter:uppercase hover:text-white hover:transition hover:duration-500 hover:">
                Projects
              </li>
            </Link>

            <Link
              to="/skills"
              onClick={() => {
                setIsclosed(true);
              }}
            >
              <li className="text-[18px] first-letter:uppercase hover:text-white hover:transition hover:duration-500 hover:">
                Skills
              </li>
            </Link>

            <a
              href="#about"
              onClick={() => {
                setIsclosed(true);
              }}
            >
              <li className="text-[18px] first-letter:uppercase hover:text-white hover:transition hover:duration-500 hover:">
                About Me
              </li>
            </a>

            <Link
              to="/contact"
              onClick={() => {
                setIsclosed(true);
              }}
            >
              <li className="first-letter:uppercase hover:text-white hover:transition hover:duration-500 text-[18px]">
                Contact
              </li>
            </Link>
          </ul>
          </nav>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <Link to={"https://www.linkedin.com/in/kwizera-elissa-640448224/"} target="_blank"><i className="fa fa-linkedin text-yellow-500"></i></Link> 
          <Link to={"https://github.com/dveloper-Elisa"} target="_blank"><i className="fa fa-github text-yellow-500"></i></Link>
          <Link to={"mailto:kwizeraelisa77@gmail.com"} target="_blank"><i className="fa fa-envelope-o text-yellow-500"></i></Link>
          
        </div>
      </div>
    </>
  );
};

export default Navigation;
