/* eslint-disable react/prop-types */
const Card = ({ link, name, image, imageFit, lang1, lang2, lang3, lang4, date, description }) => {
  const technologies = [lang1, lang2, lang3, lang4].filter(Boolean);
  return (
    <a className="project-card" href={link} target="_blank" rel="noreferrer">
      <div className={`project-image ${imageFit === "contain" ? "project-image-logo" : ""}`}><img src={image.startsWith("http") ? image : `/${image}`} alt={`${name} preview`} /><span className="project-link"><i className="fa fa-arrow-up" /></span></div>
      <div className="project-content"><div className="project-title"><h3>{name.replaceAll("_", " ")}</h3><span>{date}</span></div>{description && <p className="project-description">{description}</p>}<div className="tech-list">{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div>
    </a>
  );
};

export default Card;
