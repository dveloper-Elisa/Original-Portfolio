import { Link } from "react-router-dom";

const Footer = (pros) => {
  return (
    <>
      <div
        className={`grid grid-cols-1 sticky -bottom-30 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 px-16  ${
          pros.darkmode ? "bg-slate-700" : "bg-slate-600 text-white"
        }`}
      >
        <div className="flex flex-col gap-3 ">
          <h3>
            <u>My contact</u>
          </h3>
          <p className="fa fa-phone-square mb-5">
            <p className="absolute top-9 pl-5">+250 787647168</p>
            <p className="absolute top-14 pl-5">+250 726982830</p>
          </p>

          <Link to="https://github.com/dveloper-Elisa" target="_blank">
            <i className="fa fa-github-square"> Git Hub</i>
          </Link>
          <Link to={`https://wa.me/${+250787647168}`} target="_blank">
            <i className="fa fa-whatsapp ">Whatsapp</i>
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <h3>
            <u>My socil Media</u>
          </h3>
          <Link
            to="https://www.linkedin.com/in/kwizera-elissa-640448224/"
            target="_blank"
          >
            <p className="">
              <i className="fa fa-linkedin-square"> Linked In</i>
            </p>
          </Link>
          <Link to="https://twitter.com/home" target="_black">
            <p className="">
              <i className="fa fa-twitter-square"> Twitter</i>
            </p>
          </Link>
          <Link to="mailto:kwizeraelisa77@gmail.com" target="_black">
            <p className="">
              <i className="fa fa-envelope-square"> Email</i>
            </p>
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <h3>
            <u>My Quick navigate</u>
          </h3>
          <Link to="/about">
            <p className="">
              <i className="fa fa-address-book"> About me</i>
            </p>
          </Link>
          <Link to="/skills">
            <p className="">
              <i className="fa fa-code-fork"> Skills</i>
            </p>
          </Link>
          <Link to="/contact">
            <p className="">
              <i className="fa fa-send"> get in Touch</i>
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
