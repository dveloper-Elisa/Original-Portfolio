import ContactForm from "./pages/contact";
import Navigation from "./componets/navigation";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
// import About from "./pages/aboutme";
import Project from "./pages/projects";
import Skillcomponent from "./componets/skills";
import Certificates from "./pages/certificatePage";
import Footer from "./componets/footer";
import Notfound from "./pages/pagenotfound";

function App() {
  return (
    <div
      className={` "bg-slate-900 p-2 gap-3  text-white ring-slate-900/5 items-center lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 shadow-2xl"
          : "bg-gray-400 p-0"
      }`}
    >
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>} />

        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route
          path="/projects"
          element={<Project/>}
        /> */}
        <Route
          path="/skills"
          element={<Skillcomponent />}
        />
        <Route path="/contact" element={<ContactForm />} />
        <Route
          path="/certificates"
          element={<Certificates />}
        />
        <Route path="/*" element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
