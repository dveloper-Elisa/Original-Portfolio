import { Link } from "react-router-dom";

const Card = ({ link, name, image, lang1, lang2, lang3, lang4, date }) => {
  return (
    <div className="w-full flex items-center justify-center p-4">
      <Link to={link} target="_blank">
        <div className="flex flex-col p-4 rounded-2xl bg-slate-900 shadow-lg transform transition duration-1000 hover:scale-105 hover:bg-zinc-950 hover:shadow-2xl w-full ">
          {/* Card Header */}
          <div className="flex justify-center">
            <h5 className="text-xl md:text-2xl font-bold text-yellow-400 uppercase p-2 rounded-md text-center shadow-md">
              {name}
            </h5>
          </div>

          {/* Image Section */}
          <div className="overflow-hidden rounded-xl">
            <img
              src={image}
              alt="database not found"
              className="object-cover w-full h-60 md:h-72"
            />
          </div>

          {/* Language Badges and Date */}
          <div className="flex flex-wrap justify-between items-center mt-2">
            <div className="flex flex-wrap gap-1">
              {[lang1, lang2, lang3, lang4].map((lang, index) => (
                <p
                  key={index}
                  className="bg-slate-700 text-sm md:text-base text-white p-1 rounded-md"
                >
                  {lang}
                </p>
              ))}
            </div>
            <p className="text-white font-mono text-sm md:text-base">
              Completed on: {date}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
