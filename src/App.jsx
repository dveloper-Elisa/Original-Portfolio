import "./App.css";

import Batton from "./componets/button";
import ContactForm from "./pages/contact";
import Navigation from "./componets/naviation";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/aboutme";
import Project from "./pages/projects";
import Skills from "./pages/skills";

let contact = "Contact me Now";
let color = "bg-red-500";
// let name = "Kamana";
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Batton color={color} contact={contact} />
    </>
  );
}

export default App;
