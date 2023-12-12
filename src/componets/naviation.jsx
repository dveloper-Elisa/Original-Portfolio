import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = (pros) => {
  const [isclosed, setIsclosed] = useState(true);

  return (
    <>
      <div
        className={`flex flex-row items-center justify-between sticky bg-slate-600 top-0 z-10 px-16 ${pros.colo}`}
      >
        <div className="flex">
          <img src="./logo.png" alt="Logo Not found" className="w-[8rem] " />
        </div>
        <nav
          className={`flex flex-col lg:flex-row md:flex md:flex-row justify-end w-fit`}
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

            <Link
              to="/about"
              onClick={() => {
                setIsclosed(true);
              }}
            >
              <li className="text-[18px] first-letter:uppercase hover:text-white hover:transition hover:duration-500 hover:">
                About Me
              </li>
            </Link>

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
    </>
  );
};

export default Navigation;
