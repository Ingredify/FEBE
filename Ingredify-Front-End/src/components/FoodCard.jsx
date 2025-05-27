const FoodCard = () => {
  return (
    <div className="">
      <div className="mb-1 h-44 w-full md:h-48 lg:h-43 xl:h-57">
        <img src="./img/food.jpg" className="h-full w-full object-cover" alt="food img" />
      </div>
      <p>Moza Chicken</p>
      <p className="text-custom-gray text-sm leading-4.5 lg:leading-5">
        a Healthy and colorful stir fry with fresh vegetables and a savory souce
      </p>

      <div className="mt-2.5 flex justify-between lg:mt-3">
        <p className="text-custom-gray flex items-center gap-1 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          30 Mins
        </p>
        <button className="text-light-green flex items-center gap-2 rounded-lg text-xs font-semibold hover:cursor-pointer lg:text-sm">
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
