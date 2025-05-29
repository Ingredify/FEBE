import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const WelcomePage = () => {
  return (
    <section className="font-montserrat relative h-screen w-full overflow-hidden pt-5 md:pt-10 lg:pt-0">
      <Navbar separateLogin />

      <div className="relative flex h-screen flex-col px-6 md:px-16 lg:flex-row lg:px-24">
        {/* Text Content */}
        <div className="z-10 flex h-auto w-full flex-col justify-center py-12 lg:h-screen lg:w-[36rem] lg:py-0">
          <span className="bg-light-green hidden h-0.5 w-3/4 lg:block"></span>

          <h1 className="font-agbalumo mt-2 mb-4 text-3xl leading-snug font-bold sm:text-4xl md:text-5xl">
            Turn Your <span className="text-light-green">Ingredients</span> into Delicious Meals
          </h1>
          <p className="text-custom-gray mb-6 text-base font-light md:text-lg">
            Simply enter the ingredients you have, and we'll show you amazing recipes you can make
            right now. No more wasted food or complicated meal planning.
          </p>
          <Link
            to="/home"
            className="hover:bg-dark-green bg-light-green self-start rounded-md px-6 py-3 text-sm font-medium text-white transition-all"
          >
            Start Cooking
          </Link>
        </div>

        {/* Hero Image (layar besar)) */}
        <div className="heroImage relative hidden h-full md:w-[45rem] lg:block xl:w-[54rem] 2xl:w-[70rem]">
          <img src="./img/heroImg2.jpg" alt="hero image" className="h-full w-full object-cover" />
        </div>

        <img
          src="./img/bg-food.png"
          alt="background image"
          className="relative -bottom-14 z-0 mx-auto opacity-10 md:-bottom-30 md:w-3xl lg:absolute lg:-bottom-20 lg:-left-40 lg:w-xl"
        />
      </div>
    </section>
  );
};

export default WelcomePage;
