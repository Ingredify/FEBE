import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <section>
      <Navbar />
      <div className="lg:mt-12">
        <div className="img-background relative min-h-86 text-white lg:min-h-96">
          <div className="relative px-6 pt-20 text-center lg:pt-16">
            <h1 className="mb-2 text-2xl font-bold md:text-3xl lg:text-4xl">
              Find Delicious Recipes With Ingredients You Have
            </h1>
            <h2 className="mb-4 text-base md:text-lg lg:text-xl">
              Just type what's in your kitchen — we'll find the perfect recipes for you.
            </h2>
            <div className="mx-auto flex w-3/4 justify-center gap-2 rounded-xl bg-white px-1.5 py-1 text-sm sm:w-1/2 md:w-2/5 lg:w-1/3 lg:py-1">
              <input
                placeholder="Enter ingredients (e.g., eggs, rice, tomato)"
                type="search"
                className="text-custom-black w-full rounded p-2 placeholder:text-gray-400 focus:outline-none"
              />
              <button className="hover:bg-dark-green bg-light-green flex items-center justify-center gap-2 rounded-lg px-2 py-0 text-xs font-semibold text-white hover:cursor-pointer lg:px-4 lg:py-2 lg:text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
