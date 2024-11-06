import { Link } from "react-router-dom";
import About from "./aboutme";
import Project from "./projects";
import Skillcomponent from "../componets/skills";
import Me from "./me";


const Home = () => {
  return (
    <div className="bg-zinc-950">
      <div className="flex flex-col items-center min-h-screen w-full px-5 justify-evenly bg-slate-900 text-white">
        
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full lg:px-[10%]">
          
          {/* Right Section */}
          <div className="text-center md:text-left w-full md:w-1/3 px-4">
            <h2 className="text-2xl md:text-4xl font-semibold">I{`'`}m</h2>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-3">Elisa Kwizera</h1>
            <hr className="w-1/2 h-1 bg-yellow-500 mb-4 mx-auto md:mx-0" />
            <p className="max-w-lg text-lg leading-relaxed">
              A full-stack Developer specializing in mobile and web applications, with over 3 years of experience in UI/UX design and progressive web applications.
            </p>
          </div>
          
          {/* Center Section */}
          <div className="relative w-full md:w-1/3 flex justify-center">
            <img
              src="./resized.png"
              alt="Elisa Kwizera"
              className="w-40 md:w-56 lg:w-64 rounded-full border-4 border-yellow-500 translate-x-10 transition-all duration-1000 hover:scale-150 scale-125 inset-y-72 inset-x-11"
            />
          </div>
          
          {/* Left Section (Social Links) */}
          <div className="text-center md:text-left w-full md:w-1/3 px-4">
            <h3 className="font-light text-lg mb-3">Our Services</h3>
            <p className="mb-5 text-left max-w-[20rem] mx-auto md:mx-0">
              Crafting high-quality, innovative software solutions designed to enhance your experience and drive meaningful impact.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              {[
                { href: "https://web.facebook.com/kwizera.elissa.14", icon: "fa-facebook" },
                { href: "https://x.com/KwizersE", icon: "fa-twitter" },
                { href: "https://www.instagram.com/kwizeraelissa369/", icon: "fa-instagram" },
                { href: "https://wa.me/250787647168", icon: "fa-whatsapp" }
              ].map(({ href, icon }, idx) => (
                <Link key={idx} to={href} target="_blank">
                  <i className={`fa ${icon} text-yellow-500 rounded-full bg-slate-500 p-4 w-10 h-10 flex items-center justify-center hover:bg-slate-600 transition`}></i>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Project Logos Section */}
        <div className="flex items-center justify-center w-full bg-slate-800 p-5 rounded-lg my-10">
          <div className="grid grid-cols-3 gap-5 w-full max-w-md sm:max-w-lg md:max-w-3xl">
            {["Picture1.png", "download.jpeg", "qt=q_95.webp"].map((src, idx) => (
              <div key={idx} className="bg-slate-600 p-2 rounded-md">
                <img src={`./${src}`} alt="Project logo" className="w-20 h-auto mx-auto" />
              </div>
            ))}
          </div>
        </div>

      </div>
        {/* What I Can Do Section */}
        <About />
        <Me />
        <Project />
        <Skillcomponent/>
    </div>
  );
};

export default Home;
