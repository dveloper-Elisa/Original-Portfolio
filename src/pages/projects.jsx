import projectArray from "../data/data";
import Card from "../componets/cardDevision";

const Project = () => (
  <section className="section projects-section" id="projects">
    <div className="container">
      <div className="section-heading projects-heading"><div><p className="eyebrow">Selected work</p><h2>Ideas brought to<br /><em>life in the browser.</em></h2></div><a href="https://github.com/dveloper-Elisa" target="_blank" rel="noreferrer" className="text-link">View GitHub <i className="fa fa-arrow-up" /></a></div>
      <div className="projects-grid">{projectArray.map((project) => <Card key={project.name} {...project} />)}</div>
    </div>
  </section>
);

export default Project;
