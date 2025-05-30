import { Link } from 'react-router-dom';
import LoveButton from '../elements/LoveButton';

const FoodCard = () => {
  return (
    <div className="group z-10">
      <div className="relative mb-1 h-40 w-full cursor-pointer transition-transform duration-300 group-hover:scale-103 md:h-48 lg:h-43 xl:h-48">
        <Link to="/recipe">
          <img src="./img/food.jpg" className="h-full w-full object-cover" alt="food img" />
        </Link>
        <div className="absolute top-2 right-2">
          <LoveButton />
        </div>
      </div>
      <div>
        <p className="textcustom-black">Moza Chicken</p>
        <p className="text-custom-gray text-xs leading-4.5 lg:leading-5">
          a Healthy and colorful stir fry with fresh vegetables and a savory souce
        </p>

        <div className="mt-2.5 flex justify-between lg:mt-3">
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

export default FoodCard;
