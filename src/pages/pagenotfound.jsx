const Notfound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white">
      <div className="text-center p-10">
        {/* Animated 404 Text */}
        <p className="text-[120px] font-extrabold text-yellow-500 animate-bounce">
          404
        </p>
        {/* Error Message */}
        <p className="text-3xl font-semibold mb-4">Page Not Found</p>
        <p className="text-lg text-gray-300 mb-8">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
        {/* Home Button */}
        <a
          href="/"
          className="inline-block px-8 py-3 text-lg font-semibold bg-yellow-500 text-slate-900 rounded-full hover:bg-yellow-600 transition duration-200 ease-in-out shadow-md"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default Notfound;
