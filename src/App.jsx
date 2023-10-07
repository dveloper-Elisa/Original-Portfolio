import "./App.css";

import ContactForm from "./pages/contact";
import Navigation from "./componets/naviation";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/aboutme";
import Project from "./pages/projects";
import Skills from "./pages/skills";
import Certificates from "./pages/certificatePage";
import Footer from "./componets/footer";
import Notfound from "./pages/pagenotfound";

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
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
