/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./navigation.css";

const links = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["Projects", "#projects"],
  ["Certificates", "#certificates"],
  ["Skills", "#skills"],
  ["About", "#about"],
];

const Navigation = ({ theme, setTheme, onOpenCV }) => {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  useEffect(() => {
    const sections = links.map(([, href]) => document.querySelector(href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveLink(`#${entry.target.id}`);
      }),
      { rootMargin: "-32% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <nav className="container nav-bar" aria-label="Main navigation">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <img src="/resized.png" alt="Elisa Kwizera" />
          <span>Elisa<span className="brand-dot">.</span></span>
        </a>

        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => { setActiveLink(href); setOpen(false); }} className={activeLink === href ? "is-active" : ""} aria-current={activeLink === href ? "page" : undefined}>{label}</a>
          ))}
        </div>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
            <i className={`fa ${theme === "dark" ? "fa-sun-o" : "fa-moon-o"}`} aria-hidden="true" />
          </button>
          <a className="nav-contact" href="#contact">Let&apos;s talk <i className="fa fa-arrow-right" aria-hidden="true" /></a>
          <button className="hire-button" onClick={onOpenCV}>Hire me <i className="fa fa-file-text-o" aria-hidden="true" /></button>
          <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
            <i className={`fa ${open ? "fa-times" : "fa-bars"}`} aria-hidden="true" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
