import certified from "../data/certificate";
import "./certificates.css";

const Certificates = () => (
  <section className="section certificates-section" id="certificates">
    <div className="container">
      <div className="section-heading certificates-heading"><div><p className="eyebrow">Professional development</p><h2>Learning with<br /><em>purpose.</em></h2></div><p>Credentials that reflect my ongoing commitment to strong engineering foundations and thoughtful digital craftsmanship.</p></div>
      <div className="certificates-grid">{certified.map(({ image, description, link }) => <a className="certificate-card" href={link} target="_blank" rel="noreferrer" key={image}><div className="certificate-image"><img src={`/cirtificate/${image}`} alt="Certificate" /><span><i className="fa fa-arrow-up" /></span></div><p>{description}</p></a>)}</div>
    </div>
  </section>
);

export default Certificates;
