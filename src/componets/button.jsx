const Batton = (pros) => {
  return (
    <>
      <div className="">
        <button
          className={`text-white w-full uppercase border-[2px] border-gray-500 px-10 py-1 rounded-xl ${pros.color}`}
        >
          {pros.contact}
        </button>
      </div>
    </>
  );
};

export default Batton;
