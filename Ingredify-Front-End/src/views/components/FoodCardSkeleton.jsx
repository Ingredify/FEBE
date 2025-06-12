const FoodCardSkeleton = () => {
  return (
    <div className="food-card2 z-10 animate-pulse overflow-hidden rounded-xl bg-white">
      <div className="mb-1 h-48 w-full rounded-t-xl bg-gray-300" />
      <div className="space-y-2 px-3 pt-1 pb-4">
        <div className="h-4 w-3/4 rounded bg-gray-300" />
        <div className="mt-4 flex items-center justify-between">
          <div className="h-4 w-1/3 rounded bg-gray-300" />
          <div className="h-4 w-1/6 rounded bg-gray-300" />
          <div className="h-4 w-1/4 rounded bg-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;
