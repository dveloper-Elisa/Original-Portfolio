import { Link } from "react-router-dom";

const Me = () => {
  return (
    <div className="flex flex-col items-center gap-10 w-full p-5 bg-slate-950 text-white">
      {/* First Section */}
      <div className="flex flex-col items-center justify-center gap-5 w-full sm:flex-col md:flex-row lg:flex-row lg:w-[80%] md:w-[80%] m-5">
        {/* Image Section */}
        <div className="w-[80%] sm:w-full md:w-1/2 lg:w-1/2">
          <img src="./me.jpeg" alt="Me" className="w-full rounded-lg shadow-lg" />
        </div>

        {/* Description Section */}
        <div className="w-full flex flex-col gap-5">
          <i className="fa fa-quote-left text-[3rem] text-yellow-500"></i>
          <p className="text-lg">
            I am Elisa Kwizera, a committed software professional who transforms ideas into robust, high-quality digital solutions. 
            My goal is to exceed client expectations, delivering exceptional products that bring their visions to life. 
            <br />
            Coding isn{`'`}t just my job; it{`'`}s my passion.
          </p>
          <p className="flex flex-col gap-1">
            <span className="font-bold text-xl">Elisa KWIZERA</span>
            <span className="font-light text-md">Full-Stack Software developer</span>
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col items-center justify-center gap-5 w-full sm:flex-col md:flex-row lg:flex-row lg:w-[80%] md:w-[80%] m-5">
        {/* Text Section */}
        <div className="w-full flex flex-col gap-5">
          <i className="fa fa-quote-left text-[3rem] text-yellow-500"></i>
          <p className="text-lg">
            <span className="text-2xl font-semibold">Let’s Collaborate!</span> <br />
            Partner with me to bring your ideas to life through innovative, high-performance software.
            I specialize in delivering unique solutions quickly, tailored to meet your specific needs.
          </p>
          <p className="flex flex-col gap-1">
            <span className="font-bold text-xl">Reach out me via</span>
            <div className="flex gap-4 justify-center md:justify-start break-keep mt-5">
              {[
                { href: "https://wa.me/250787647168", icon: "fa-whatsapp"},
                { href: "https://github.com/dveloper-Elisa", icon: "fa-github" },
                { href: "mailto:kwizeraelisa77@gmail.com", icon: "fa-envelope" },
                { href: "https://www.linkedin.com/in/kwizera-elissa-640448224/", icon: "fa-linkedin" },
              ].map(({ href, icon }, idx) => (
                <Link key={idx} to={href} target="_blank">
                  <i className={`fa ${icon} text-yellow-500 rounded-full bg-slate-500 p-4 w-10 h-10 flex items-center justify-center hover:bg-slate-600 transition`}></i>
                </Link>
              ))}
            </div>
          </p>
          
        </div>

        {/* Image Section */}
        <div className="w-[50%] sm:w-full md:w-1/2 lg:w-1/2">
          {/* <img src="./profile.png" alt="Me" className="w-full rounded-lg shadow-lg" /> */}
          <img src="./Elisa.jpeg" alt="Me" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Me;
