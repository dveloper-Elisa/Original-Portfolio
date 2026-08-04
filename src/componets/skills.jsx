/* eslint-disable react/prop-types */
import SkillsFront from "../data/frontend";
import SkillsBack from "../data/backend";

const SkillGroup = ({ title, skills }) => <div className="skill-group"><h3>{title}</h3><div className="skills-list">{skills.map(({ image, content }) => <div className="skill-pill" key={content}><img src={image.startsWith("http") ? image : `/${image}`} alt="" /><span>{content}</span></div>)}</div></div>;

const Skillcomponent = () => (
  <section className="section skills-section" id="skills"><div className="container skills-layout"><div className="skills-copy"><p className="eyebrow">My toolkit</p><h2>The right tools<br />for the <em>right job.</em></h2><p>Always learning, always refining. These are the technologies I use to build elegant digital experiences end to end.</p><a href="#contact" className="text-link">Start a project <i className="fa fa-arrow-right" /></a></div><div className="skill-groups"><SkillGroup title="Frontend" skills={SkillsFront} /><SkillGroup title="Backend & data" skills={SkillsBack} /></div></div></section>
);

export default Skillcomponent;
