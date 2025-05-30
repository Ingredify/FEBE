import { Link } from 'react-router-dom';
import LoveButton from '../elements/LoveButton';

const FoodCard2 = () => {
  return (
    <div className="group food-card2 group z-10 overflow-hidden rounded-xl bg-white">
      <div className="relative mb-1 h-30 w-full cursor-pointer transition-transform duration-300 group-hover:scale-103">
        <Link to="/recipe">
          <img src="./img/food.jpg" className="h-full w-full object-cover" alt="food img" />
        </Link>{' '}
        <div className="absolute top-2 right-2">
          <LoveButton />
        </div>
      </div>
      <div className="px-2.5 pt-1 pb-4">
        <p className="text-custom-black">Moza Chicken</p>
        <p className="text-custom-gray lg:leading-4.2 leading-4.3 text-xs">
          a Healthy and colorful stir fry ...
        </p>

        <div className="mt-2.5 flex justify-between lg:mt-2">
          <p className="text-custom-gray flex items-center gap-1 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            30 Mins
          </p>
          <Link
            to="/recipe"
            className="text-light-green hover:text-dark-green flex cursor-pointer items-center gap-2 rounded-lg text-xs font-semibold lg:text-sm"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard2;
