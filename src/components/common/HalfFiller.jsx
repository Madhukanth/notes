const HalfFiller = () => {
  return (
    <div className="hidden bg-green-500 sm:hidden md:w-2/4 md:flex lg:w-2/4 justify-center items-center p-10">
      <div>
        <div className="flex justify-center">
          <div className="bg-white w-32 rounded-xl text-center mb-6 border-3 border-red-500 border-solid">
            <h1 className="text-8xl text-green-500">N</h1>
          </div>
        </div>
        <h3 className="text-white text-4xl font-semibold mb-3">
          Welcome to Notes
        </h3>
        <p className="text-2xl text-gray-100">
          Notes allows you to create notes on the go.
        </p>
        <p className="text-2xl text-gray-100">
          You create, update and delete notes with no registration.
        </p>
      </div>
    </div>
  );
};

export default HalfFiller;
