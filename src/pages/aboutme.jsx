const services = [
  ["fa-mobile", "Mobile applications", "Smooth, useful Android experiences designed around the people using them."],
  ["fa-object-group", "UI/UX design", "Clear interfaces and intentional user journeys that make every interaction feel natural."],
  ["fa-code", "Frontend development", "Responsive, accessible interfaces built for speed, polish, and long-term maintainability."],
  ["fa-server", "Backend development", "Reliable APIs and data systems that keep your product dependable as it grows."],
  ["fa-cogs", "DevOps", "Streamlined deployments, dependable infrastructure, and practical monitoring to keep products running smoothly."],
];

const About = () => (
  <section className="section services-section" id="services">
    <div className="container">
      <div className="section-heading split-heading"><div><p className="eyebrow">What I do</p><h2>From a blank canvas<br />to a product people <em>love.</em></h2></div><p>I blend product thinking, crisp design, and dependable engineering to create work that moves ideas forward.</p></div>
      <div className="services-grid">{services.map(([icon, title, copy], index) => <article className="service-card" key={title}><span className="service-number">0{index + 1}</span><i className={`fa ${icon}`} /><h3>{title}</h3><p>{copy}</p><span className="service-arrow"><i className="fa fa-arrow-up" /></span></article>)}</div>
      <div className="stats-bar"><div><strong>15<span>+</span></strong><p>Projects delivered</p></div><div><strong>4<span>+</span></strong><p>Years of experience</p></div><div><strong>2<span>+</span></strong><p>Remote partnerships</p></div><p className="stats-copy">I care about the small details because they are what turn a functional product into a memorable one.</p></div>
    </div>
  </section>
);

export default About;
