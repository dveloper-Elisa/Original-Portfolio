const About = () => {
  return (
    <>
      <div id="about" className="mx-5 py-10">
        <div className="flex flex-col lg:flex-row items-start gap-10 w-full px-5 lg:px-0">
          {/* Left Column */}
          <div className="flex flex-col gap-5 w-full lg:w-1/2">
            <h2 className="text-3xl font-extrabold">What I Can Do for You</h2>
            <p className="leading-relaxed">
              With extensive experience, we provide life to various projects,
              ensuring quality and satisfaction in each.
            </p>
            <div className="flex flex-col sm:flex-row gap-10">
              {[
                { label: "Projects Completed", count: "10+" },
                { label: "Remote Contract", count: "2+" },
                { label: "Years of Experience", count: "3+" },
              ].map(({ label, count }, idx) => (
                <div key={idx} className="text-center">
                  <span className="text-yellow-500 font-bold text-2xl">
                    {count}
                  </span>
                  <p className="text-sm font-light">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stacks Section */}
          <div className="grid grid-cols-1 break-all md:grid-cols-2 gap-5 w-full lg:w-1/2">
            {[
              {
                title: "UI/UX Design",
                img: "./Figma.png",
                projects: "4 Projects Designed",
              },
              {
                title: "Front-End Development",
                img: "./frontend.avif",
                projects: "15+ Projects Developed",
              },
              {
                title: "Mobile Applications",
                img: "./mobileapp.avif",
                projects: "2 Projects Designed",
              },
              {
                title: "Backend Development",
                img: "./backendDevelopment.png",
                projects: "10 Projects Finished",
              },
            ].map(({ title, img, projects }, idx) => (
              <div
                key={idx}
                className="flex items-center gap-5 p-4 bg-slate-800 rounded-md shadow-md"
              >
                <img src={img} alt={title} className="w-20 h-auto" />
                <div>
                  <h3 className="font-bold text-lg">{title}</h3>
                  <p className="font-light">{projects}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="flex justify-center gap-10 px-4 my-10">
          <div className="grid grid-cols-1 w-full max-md:w-full sm:w-full break-all sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 md:max-w-[50%] lg:max-w-[50%]">
            <div className="text-left bg-zinc-800 p-5">
              <p className="text-yellow-500 font-extrabold">
                <i className="fa fa-mobile text-[4rem]"></i>
              </p>
              <h1 className="text-[1.2rem] py-2 font-semibold">
                Mobile App Development
              </h1>
              <p className="w-full">
                Building responsive and engaging mobile applications tailored
                for Android platform, ensuring a smooth user
                experience.
              </p>
            </div>

            <div className="text-left bg-zinc-800 p-5">
              <p className="text-yellow-500 font-extrabold">
                <i className="fa fa-laptop text-[4rem]"></i>
              </p>
              <h1 className="text-[1.2rem] py-2 font-semibold">UI/UX Design</h1>
              <p className="w-full">
                Crafting visually appealing and user-friendly designs that
                provide intuitive interactions and a seamless user journey.
              </p>
            </div>

            <div className="text-left bg-zinc-800 p-5">
              <p className="text-yellow-500 font-extrabold">
                <i className="fa fa-code text-[4rem]"></i>
              </p>
              <h1 className="text-[1.2rem] py-2 font-semibold">
                Frontend Development
              </h1>
              <p className="w-full">
                Developing modern and responsive web interfaces that enhance
                user experience, with a focus on performance and accessibility.
              </p>
            </div>

            <div className="text-left bg-zinc-800 p-5">
              <p className="text-yellow-500 font-extrabold">
                <i className="fa fa-server text-[4rem]"></i>
              </p>
              <h1 className="text-[1.2rem] py-2 font-semibold">
                Backend Development
              </h1>
              <p className="w-full">
                Implementing robust and scalable server-side logic and database
                systems to ensure reliability and efficiency of applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
