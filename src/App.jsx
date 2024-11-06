import Navigation from "./componets/navigation";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import Footer from "./componets/footer";
import Notfound from "./pages/pagenotfound";

function App() {
  return (
    <div
      className={"bg-slate-900 gap-3  text-white ring-slate-900/5 items-center lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 shadow-2xl p-0"
      }
    >
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
