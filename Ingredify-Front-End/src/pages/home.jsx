import { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import FoodCard from '../components/FoodCard';
import FoodCard2 from '../components/FoodCard2';

const HomePage = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <section>
      <Navbar />
      <div className="lg:mt-12">
        <div className="img-background relative min-h-84 text-white lg:min-h-92">
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
        <main className="flex px-7 py-9 lg:px-24">
          {/* <Sidebar /> */}
          <Sidebar show={showSidebar} setShowSidebar={setShowSidebar} />
          <section className="grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4">
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard2 />
            <FoodCard2 />
            <FoodCard2 />
            <FoodCard2 />
          </section>
        </main>
      </div>
      <div
        className="bg-light-green hover:bg-dark-green fixed right-4 bottom-4 block cursor-pointer rounded-full p-2 text-white shadow-2xl md:hidden"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      <footer>
        <div className="bg-custom-black py-4 text-center text-sm text-white">
          <p>© 2025 Ingredify. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default HomePage;
