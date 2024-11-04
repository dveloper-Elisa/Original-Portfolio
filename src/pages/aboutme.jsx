const About = (pros) => {
  return (
    <>
      <div id="about"
        className={`flex flex-col ${
          pros.darkmode ? "bg-slate-900" : "bg-slate-300"
        } `}
      >
        <div className="flex justify-center lg:text-[60px] md:text-[30px] text-[20px] text-center font-bold capitalize text-blue-600 mt-2">
          Who is Me ?
        </div>
        <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col items-center px-16 gap-5">
          <div className="min-w-fit">
            <img
              src="./lefted_position-removebg-preview.png"
              alt="image is here"
              className="w-[25vw] rounded-full"
            />
          </div>

          <div className="">
            I am skilled and enthusiastic Information Technology professional
            with a strong passion for Full Stack Web Development. With a diverse
            skill set that includes programming languages such as:
            <b> JavaScript, Java, and PHP</b>, as well as expertise in popular
            web development technologies like{" "}
            <b>React.js, Node.js, HTML, CSS</b> , and database management with{" "}
            <b>MySQL and MongoDB</b>, I brings a broad and versatile range of
            capabilities to any project.
          </div>
        </div>
        {/* second devision */}
        <div className="flex justify-center lg:text-[60px] md:text-[30px] text-[20px] text-center font-bold capitalize text-blue-600 mt-2">
          what is my commitment ?
        </div>
        <div className=" flex flex-col lg:flex-row md:flex-row sm:flex-col items-center px-16 gap-5">
          <div className="translate-y-14">
            Furthermore, my commitment to excellence is complemented by their
            adaptability and willingness to work in different environments and
            locations. They possess a strong problem-solving mindset, which is a
            crucial attribute in the ever-evolving field of web development.
          </div>

          <div className=" min-w-fit">
            <img
              src="./righted_position-removebg-preview.png"
              alt="image is here"
              className="w-[20vw] rounded-full hidden lg:flex md:flex smd:hidden"
            />
          </div>

          {/* third devision */}
        </div>

        <div className="flex justify-center lg:text-[60px] md:text-[30px] text-[20px] text-center font-bold text-blue-600 mt-2">
          My Contributions
        </div>
        <div className=" flex flex-col lg:flex-row md:flex-row sm:flex-col items-center px-16 gap-5">
          <div className=" min-w-fit">
            <img
              src="./lefted_2-removebg-preview.png"
              alt="image is here"
              className="w-[25vw] rounded-full rotate-12"
            />
          </div>
          <div className="translate-x-4 mb-3">
            With a solid foundation in Information Technology, an impressive
            range of programming languages and technologies at their disposal,
            and a genuine passion for crafting user-friendly and efficient web
            applications, I am well-prepared to contribute My expertise to
            projects across the full stack web development spectrum.
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default About;
