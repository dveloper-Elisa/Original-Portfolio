import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [isclosed, setIsclosed] = useState(true);

  return (
    // <>
      <div
        className="flex items-center justify-center sticky bg-blend-darken shadow-xl top-0 z-10 max-w-full bg-gray-800"
      >
      <div className="flex items-center justify-between w-[80%] bg-gray-800">
        {/* Logo and Title */}
        <div className="flex items-center">
          <p className="font-bold font-sans text-white p-2 text-2xl flex flex-row items-center">
            <img src="./resized.png" className="w-7 h-7 rounded-full" alt={<i className="fa fa-file-picture-o text-yellow-900"></i>} />
             Elisa Developer
          </p>
        </div>

        {/* Hamburger and Close Icons */}
        <nav className="flex items-center">
          <i
            className={`text-[20px] p-1 fa cursor-pointer fa-close ${
              isclosed ? "hidden" : "block"
            }`}
            onClick={() => setIsclosed(true)}
          ></i>
          <i
            className={`text-[20px] p-1 fa cursor-pointer fa-bars md:hidden ${
              isclosed ? "block" : "hidden"
            }`}
            onClick={() => setIsclosed(false)}
          ></i>

          {/* Navigation Links */}
          <ul
            className={`md:flex text-white md:flex-row md:gap-5 ${
              isclosed
                ? "hidden"
                : "flex flex-col gap-5 h-screen w-[80%] mx-16 bg-slate-600 p-4 absolute top-16 left-0"
            }`}
          >
            <a
              href="#home"
              onClick={() => setIsclosed(true)}
              className="text-[18px] first-letter:uppercase hover:transition hover:duration-500"
            >
              <li>Home</li>
            </a>
            <a
              href="#projects"
              onClick={() => setIsclosed(true)}
              className="text-[18px] first-letter:uppercase hover:text-yellow-500 hover:transition hover:duration-500"
            >
              <li>Projects</li>
            </a>
            <a
              href="#skills"
              onClick={() => setIsclosed(true)}
              className="text-[18px] first-letter:uppercase hover:text-yellow-500 hover:transition hover:duration-500"
            >
              <li>Skills</li>
            </a>
            <a
              href="#about"
              onClick={() => setIsclosed(true)}
              className="text-[18px] first-letter:uppercase hover:text-yellow-500 hover:transition hover:duration-500"
            >
              <li>About Me</li>
            </a>

            {/* Duplicate Social Links for Mobile Menu */}
            <div className={`flex gap-4 mt-4 ${isclosed ? "hidden" : "flex md:hidden"}`}>
              <Link
                to={"https://www.linkedin.com/in/kwizera-elissa-640448224/"}
                target="_blank"
              >
                <i className="fa fa-linkedin text-yellow-500 text-2xl"></i>
              </Link>
              <Link to={"https://github.com/dveloper-Elisa"} target="_blank">
                <i className="fa fa-github text-yellow-500 text-2xl"></i>
              </Link>
              <Link to={"mailto:kwizeraelisa77@gmail.com"} target="_blank">
                <i className="fa fa-envelope-o text-yellow-500 text-2xl"></i>
              </Link>
            </div>
          </ul>
        </nav>

        {/* Social Links for Larger Screens */}
        <div className="hidden md:flex gap-4">
          <Link
            to={"https://www.linkedin.com/in/kwizera-elissa-640448224/"}
            target="_blank"
          >
            <i className="fa fa-linkedin text-yellow-500 text-2xl"></i>
          </Link>
          <Link to={"https://github.com/dveloper-Elisa"} target="_blank">
            <i className="fa fa-github text-yellow-500 text-2xl"></i>
          </Link>
          <Link to={"mailto:kwizeraelisa77@gmail.com"} target="_blank">
            <i className="fa fa-envelope-o text-yellow-500 text-2xl"></i>
          </Link>
        </div>
      </div>
      </div>
    // </>
  );
};

export default Navigation;
