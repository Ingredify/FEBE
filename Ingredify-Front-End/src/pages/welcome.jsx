import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const WelcomePage = () => {
  return (
    <section className="font-montserrat min-h-screen w-full overflow-hidden">
      <Navbar separateLogin />
      <div className="relative flex px-24">
        <div className="z-10 flex h-screen w-[36rem] flex-col justify-center">
          <h1 className="font-agbalumo mb-4 text-5xl leading-13 font-bold">
            Turn Your <span className="text-light-green">Ingredients</span> into Delicious Meals
          </h1>
          <p className="text-custom-gray mb-6 font-light">
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
        <div className="heroImage h-screen w-[65rem]">
          <img src="./img/heroImg2.jpg" alt="hero image" className="w-full" />
        </div>{' '}
        <img
          src="./img/bg-food.png"
          alt="background image"
          className="absolute -bottom-60 -left-50 z-0 rotate-45 opacity-12"
        />
      </div>
    </section>
  );
};

export default WelcomePage;
