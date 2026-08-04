import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./componets/navigation";
import Footer from "./componets/footer";
import WhatsAppWidget from "./componets/whatsappWidget";
import CvModal from "./componets/cvModal";
import Home from "./pages/home";
import Notfound from "./pages/pagenotfound";
import "./alternate-layout.css";
import "./editorial-layout.css";
import "./professional-layout.css";
import "./system-layout.css";
import "./consulting-layout.css";
import "./minimal-portfolio-layout.css";

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "dark");
  const [cvOpen, setCvOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <div className="app-shell">
      <Navigation theme={theme} setTheme={setTheme} onOpenCV={() => setCvOpen(true)} />
      <main>
        <Routes>
          <Route path="/" element={<Home onOpenCV={() => setCvOpen(true)} />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppWidget />
      <CvModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </div>
  );
}

export default App;
