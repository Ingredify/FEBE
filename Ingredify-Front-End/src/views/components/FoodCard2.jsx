import { Link } from 'react-router-dom';
import LoveButton from '../elements/LoveButton';
import StarRating from '../elements/StarRating';
import { useEffect, useState } from 'react';
import { fetchRecipeRating } from '../../presenter/DetailPresenter';

const FoodCard2 = ({ recipe }) => {
  const [liked, setLiked] = useState(false);
  const [averageRating, setAverageRating] = useState(null);
  const [ratingError, setRatingError] = useState('');

  const handleToggleLike = (folderId) => {
    console.log('Disimpan ke folder:', folderId);
    setLiked((prevLiked) => !prevLiked);
  };

  useEffect(() => {
    const id = recipe?.id || recipe?.food_id || recipe?.foodId || recipe?.recipe?.foodId;

    if (id) {
      fetchRecipeRating(id, setAverageRating, setRatingError);
      console.log('fetch rating for:', id);
    }
  }, [recipe]);

  return (
    <div className="group food-card2 group z-10 overflow-hidden rounded-xl bg-white">
      <div className="relative mb-1 h-48 w-full cursor-pointer transition-transform duration-300 group-hover:scale-103 md:h-35">
        <Link to={`/recipe/${recipe.food_id || recipe.foodId || recipe.recipe.foodId}`}>
          <img
            src={recipe.image_url || recipe.image || recipe.recipe.image}
            className="h-full w-full object-cover"
            alt={recipe.food_name || recipe.name || recipe.recipe.name}
          />
        </Link>
        <div className="absolute top-2 right-2">
          <LoveButton liked={liked} onToggle={handleToggleLike} />
        </div>
      </div>
      <div className="px-3 pt-1 pb-4">
        <p className="text-custom-black truncate font-semibold">
          {recipe.food_name || recipe.name || recipe.recipe.name}
        </p>

        <div className="mt-2.5 flex justify-between">
          <StarRating rating={averageRating} starSize={'text-lg'} />

          <Link
            to={`/recipe/${recipe.food_id || recipe.foodId}`}
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
