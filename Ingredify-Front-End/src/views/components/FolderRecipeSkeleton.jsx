const FolderRecipeSkeleton = () => (
  <div className="collection-shadow z-10 flex animate-pulse items-center rounded-lg bg-white px-4 py-3">
    <div className="flex items-center justify-center rounded-full bg-gray-300 p-2 text-white">
      <div className="h-8 w-8 rounded-full bg-gray-400" />
    </div>
    <div className="ml-3.5 flex w-full items-center justify-between">
      <div className="flex-1">
        <div className="mb-1 h-4 w-32 rounded bg-gray-300" />
        <div className="mb-1 h-3 w-48 rounded bg-gray-200" />
        <div className="h-3 w-24 rounded bg-gray-200" />
      </div>
      <div className="flex gap-2">
        <div className="h-4 w-4 rounded bg-gray-300" />
        <div className="h-4 w-4 rounded bg-gray-300" />
      </div>
    </div>
  </div>
);

export default FolderRecipeSkeleton;
