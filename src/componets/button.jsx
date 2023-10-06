const Batton = (props) => {
  const { color, contact, onClick, classname } = props;

  return (
    <>
      <div className="">
        <button
          className={`text-white w-full uppercase border-[2px] border-gray-500 px-10 py-1 rounded-xl ${color} ${classname}`}
          onClick={onClick}
        >
          {contact}
        </button>
      </div>
    </>
  );
};

export default Batton;
