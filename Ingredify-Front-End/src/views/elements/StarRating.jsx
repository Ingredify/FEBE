import { useEffect, useState } from 'react';

// elements/StarRating.jsx
const StarRating = ({
  rating = 0,
  maxStars = 5,
  editable = false,
  onRatingChange = () => {},
  starSize,
}) => {
  const [selectedRating, setSelectedRating] = useState(null);

  useEffect(() => {
    setSelectedRating(rating);
  }, [rating]);

  const fullStars = Math.floor(selectedRating);
  const halfStar = rating % 1 >= 0.5;

  const handleClick = (index) => {
    if (editable) {
      const newRating = index + 1;
      setSelectedRating(newRating);
      onRatingChange(newRating);
    }
  };

  return (
    <div className="flex items-center text-xs text-amber-300">
      {[...Array(maxStars)].map((_, i) => {
        const iconClass =
          i < fullStars
            ? 'fa-solid fa-star'
            : i === fullStars && halfStar
              ? 'fa-solid fa-star-half-stroke'
              : 'fa-regular fa-star';

        return (
          <i
            key={i}
            className={`${iconClass} ${editable ? `${starSize} cursor-pointer transition-transform duration-150 hover:scale-110 hover:text-amber-200` : `${starSize}`}`}
            onClick={() => handleClick(i)}
          ></i>
        );
      })}
    </div>
  );
};

export default StarRating;
