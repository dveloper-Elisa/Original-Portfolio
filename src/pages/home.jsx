/* eslint-disable react/prop-types */
import About from "./aboutme";
import Project from "./projects";
import Skillcomponent from "../componets/skills";
import Me from "./me";
import Certificates from "./certificates";
import "./home.css";

const experienceLogos = ["izuba.png", "https://forefrontservices.rw/wp-content/uploads/2023/06/fore-front.svg", "aptc.png", "Picture1.png", "download.jpeg", "qt=q_95.webp"];

const Home = ({ onOpenCV }) => (
  <>
    <section className="hero section" id="home">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Available for opportunities</p>
          <p className="hero-intro">Hello, I&apos;m Elisa</p>
          <h1>Software for<br /><em>real operations.</em></h1>
          <p className="hero-description">I build web and mobile systems for teams that need reliable tools for daily work, customer service, and business growth.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <i className="fa fa-arrow-down" /></a>
            <button className="button button-hire" onClick={onOpenCV}><i className="fa fa-file-text-o" /> Hire me</button>
            <a className="button button-ghost" href="#contact"><i className="fa fa-paper-plane-o" /> Get in touch</a>
          </div>
          <div className="hero-meta">
            <div><strong>4+</strong><span>Years creating</span></div>
            <div><strong>15+</strong><span>Projects shipped</span></div>
            <div><strong>100%</strong><span>Driven by craft</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="hero-image-frame"><img src="/me1.png" alt="Elisa Kwizera" /></div>
          <div className="floating-card code-card"><span>&lt;/&gt;</span><p>Full-stack<br />developer</p></div>
          <div className="floating-card location-card"><i className="fa fa-map-marker" /><p>Based in<br /><strong>Rwanda</strong></p></div>
        </div>
      </div>
      <div className="container trusted-row"><span>Selected experience with</span><div className="trusted-logo-window"><div className="trusted-logo-track">{experienceLogos.map((src) => <img key={src} src={src.startsWith("http") ? src : `/${src}`} alt="Partner logo" />)}</div></div></div>
    </section>
    <About />
    <Project />
    <Certificates />
    <Skillcomponent />
    <Me />
  </>
);

export default Home;
