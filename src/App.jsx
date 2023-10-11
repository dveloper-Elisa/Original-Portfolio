import ContactForm from "./pages/contact";
import Navigation from "./componets/naviation";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/aboutme";
import Project from "./pages/projects";
import Skillcomponent from "./componets/skills";
import Certificates from "./pages/certificatePage";
import Footer from "./componets/footer";
import Notfound from "./pages/pagenotfound";
import { useState } from "react";

function App() {
  const [darkmode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkmode);
  };
  let color = darkmode ? "bg-gray-800" : "bg-gray-400 ";
  return (
    <div
      className={`${
        darkmode
          ? "bg-slate-900 p-2 gap-3  text-white ring-slate-900/5 items-center lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 shadow-2xl"
          : "bg-gray-400 gap-3 items-center lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 p-0"
      }`}
    >
      <p
        className="cursor-pointer absolute z-20 right-5 top-[2rem]"
        onClick={toggleDarkMode}
      >
        {darkmode ? (
          <i className="fa fa-sun-o text-[30px]"></i>
        ) : (
          <i className="fa fa-moon-o text-[30px]"></i>
        )}
      </p>
      <Navigation color={color} />
      <Routes>
        <Route path="/" element={<Home darkmode={darkmode} colors={color} />} />

        <Route path="/about" element={<About darkmode={darkmode} />} />
        <Route
          path="/projects"
          element={<Project darkmode={darkmode} color={color} />}
        />
        <Route
          path="/skills"
          element={<Skillcomponent darkmode={darkmode} />}
        />
        <Route path="/contact" element={<ContactForm darkmode={darkmode} />} />
        <Route
          path="/certificates"
          element={<Certificates darkmode={darkmode} />}
        />
        <Route path="/*" element={<Notfound />} />
      </Routes>
      <Footer darkmode={darkmode} />
    </div>
  );
}

export default App;
