const Notfound = () => {
  return (
    <>
      <div className="flex flex-col text-[100px] font-bold text-red-400 text-center p-16 items-center">
        <p className="animate-pulse border-[2px] border-black rounded-full max-w-fit p-3">
          404
        </p>
        <p className="text-2xl animate-none">Page not found</p>
      </div>
    </>
  );
};
export default Notfound;
