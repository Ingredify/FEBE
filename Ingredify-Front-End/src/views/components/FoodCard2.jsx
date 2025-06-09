import { Link } from 'react-router-dom';
import LoveButton from '../elements/LoveButton';
import StarRating from '../elements/StarRating';
import { useState } from 'react';

const FoodCard2 = () => {
  const [liked, setLiked] = useState(false);

  const handleToggleLike = (folderId) => {
    console.log('Disimpan ke folder:', folderId);
    setLiked((prevLiked) => !prevLiked);
  };

  return (
    <div className="group food-card2 group z-10 overflow-hidden rounded-xl bg-white">
      <div className="relative mb-1 h-48 w-full cursor-pointer transition-transform duration-300 group-hover:scale-103 md:h-35">
        <Link to="/recipe">
          <img src="./img/demoImg.jpg" className="h-full w-full object-cover" alt="food img" />
        </Link>{' '}
        <div className="absolute top-2 right-2">
          <LoveButton liked={liked} onToggle={handleToggleLike} />
        </div>
      </div>
      <div className="px-3 pt-1 pb-4">
        <p className="text-custom-black font-semibold">Moza Chicken</p>
        <p className="text-custom-gray lg:leading-4.2 leading-4.3 mb-1.5 text-xs">
          a Healthy and colorful stir fry ...
        </p>

        <StarRating />

        <div className="mt-2.5 flex justify-between">
          <p className="text-custom-gray flex items-center gap-1 text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-3.5"
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
            className="text-light-green hover:text-dark-green flex cursor-pointer items-center gap-2 rounded-lg text-xs font-semibold lg:text-xs"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard2;
