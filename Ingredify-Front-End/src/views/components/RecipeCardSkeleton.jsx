const RecipeCardSkeleton = () => (
  <div className="relative w-full animate-pulse rounded-lg bg-white shadow">
    <div className="h-40 w-full rounded-t-lg bg-gray-300" />
    <div className="p-4">
      <div className="mb-2 h-4 w-3/4 rounded bg-gray-300" />
      <div className="mb-1 h-3 w-1/2 rounded bg-gray-200" />
      <div className="h-3 w-1/3 rounded bg-gray-200" />
    </div>
  </div>
);

export default RecipeCardSkeleton;
