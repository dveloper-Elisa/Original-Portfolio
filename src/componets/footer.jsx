import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 items-center sm:grid-cols-1 gap-10 px-8 py-8 bg-gray-800 text-white">
      {/* Contact Section */}
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold">My Contact</h3>
        <div>
          <p className="flex gap-2 items-center">
            <i
              className="text-yellow-500 font-bold fa fa-phone-square"
              aria-hidden="true"
            ></i>{" "}
            +250 787 647 168
          </p>
          <p className="flex gap-2 items-center">
            <i
              className="text-yellow-500 font-bold fa fa-phone-square"
              aria-hidden="true"
            ></i>{" "}
            +250 726 982 830
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            to="https://github.com/dveloper-Elisa"
            target="_blank"
            className="flex gap-2 items-center"
          >
            <i
              className="text-yellow-500 font-bold fa fa-github-square"
              aria-hidden="true"
            ></i>{" "}
            GitHub
          </Link>
          <Link
            to="https://wa.me/250787647168"
            target="_blank"
            className="flex gap-2 items-center"
          >
            <i
              className="text-yellow-500 font-bold fa fa-whatsapp"
              aria-hidden="true"
            ></i>{" "}
            WhatsApp
          </Link>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold">My Social Media</h3>
        <Link
          to="https://www.linkedin.com/in/kwizera-elissa-640448224/"
          target="_blank"
          className="flex gap-2 items-center"
        >
          <i
            className="text-yellow-500 font-bold fa fa-linkedin-square"
            aria-hidden="true"
          ></i>{" "}
          LinkedIn
        </Link>
        <Link
          to="https://x.com/KwizersE"
          target="_blank"
          className="flex gap-2 items-center"
        >
          <i
            className="text-yellow-500 font-bold fa fa-twitter-square"
            aria-hidden="true"
          ></i>{" "}
          Twitter
        </Link>
        <Link
          to="mailto:kwizeraelisa77@gmail.com"
          target="_blank"
          className="flex gap-2 items-center"
        >
          <i
            className="text-yellow-500 font-bold fa fa-envelope-square"
            aria-hidden="true"
          ></i>{" "}
          <abbr title="kwizeraelisa77@gmail.com">Email</abbr>
        </Link>
      </div>

      {/* Quick Navigation Section */}
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold">Get in Touch</h3>
        <p>
          Stay connected with me to learn more about my services and explore how
          we can work together to create impactful solutions.
        </p>
      </div>

      {/* Footer Bottom Section */}
      <div className="col-span-full mt-8 text-center border-t border-gray-700 pt-4">
        <p className="text-yellow-500">
          &copy; {new Date().getFullYear()} All rights reserved to Elisa
        </p>
      </div>
    </footer>
  );
};

export default Footer;
