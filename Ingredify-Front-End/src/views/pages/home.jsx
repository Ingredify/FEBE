import { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import FoodCard2 from '../components/FoodCard2';
import Footer from '../components/Footer';
import MenuButton from '../elements/MenuButton';
import BackgroundImgFood from '../elements/BackgroundImgFood';

const HomePage = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <section className="font-montserrat relative overflow-visible">
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
              <button className="hover:bg-dark-green bg-light-green flex items-center gap-1 rounded-lg px-2 py-0 text-xs font-semibold text-white hover:cursor-pointer md:gap-2 lg:px-4 lg:py-2 lg:text-sm">
                <i className="fa-solid fa-magnifying-glass"></i>
                Search
              </button>
            </div>
          </div>
        </div>
        <main className="flex flex-col px-7 py-9 pb-20 lg:px-24">
          {/* <Sidebar show={showSidebar} setShowSidebar={setShowSidebar} /> */}
          <h2 className="text-custom-black mb-4 text-xl font-semibold">Recommended Recipes</h2>
          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <FoodCard2 />
            <FoodCard2 />
            <FoodCard2 />
            <FoodCard2 />
            <FoodCard2 />

            <FoodCard2 />
            <FoodCard2 />
            <FoodCard2 />
            <FoodCard2 />
            <FoodCard2 />
            <FoodCard2 />
            <FoodCard2 />
            <FoodCard2 />
            <FoodCard2 />
            <FoodCard2 />
            <FoodCard2 />
            <FoodCard2 />
            <FoodCard2 />
            <FoodCard2 />
            <FoodCard2 />
          </div>
        </main>
      </div>
      <MenuButton showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      {/* Background Image transparan */}
      <BackgroundImgFood />
      <Footer />
    </section>
  );
};

export default HomePage;
