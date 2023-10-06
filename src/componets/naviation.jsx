import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [isclosed, setIsclosed] = useState(true);

  useEffect(() => {
    setIsclosed(false);
  }, []);
  return (
    <>
      <div className="flex flex-row items-center justify-between sticky bg-gray-400 top-0 z-10 px-16">
        <div className="flex">
          <img src="./logo.png" alt="Logo Not found" className="w-[8rem] " />
        </div>
        <nav
          className={`flex flex-col lg:flex-row md:flex md:flex-row justify-end w-fi`}
        >
          <i
            className={`border text-[20px] w-fit p-1 fa cursor-pointer fa-close ${
              isclosed ? "hidden" : "flex"
            }`}
            onClick={() => {
              setIsclosed(true);
            }}
          ></i>
          <i
            className={`border text-[20px] w-fit p-1 fa cursor-pointer fa-bars ${
              isclosed ? "flex" : "hidden"
            }`}
            onClick={() => {
              setIsclosed(false);
            }}
          ></i>
          <ul
            className={`text-black flex flex-row gap-5 ${
              isclosed ? "hidden" : " flex flex-col "
            }`}
          >
            <Link to="/">
              <li className="first-letter:uppercase">Home</li>
            </Link>

            <Link to="/certificates">
              <li className="first-letter:uppercase">Certificates</li>
            </Link>

            <Link to="/projects">
              <li className="first-letter:uppercase">Projects</li>
            </Link>

            <Link to="/skills">
              <li className="first-letter:uppercase">Skills</li>
            </Link>

            <Link to="/about">
              <li className="first-letter:uppercase">About Me</li>
            </Link>

            <Link to="/contact">
              <li className="first-letter:uppercase">Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
