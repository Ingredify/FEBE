const DetailRecipeSkeleton = () => {
  return (
    <div className="font-montserrat mt-3 w-full animate-pulse">
      {/* BackButton Placeholder */}
      <div className="mb-3 h-6 w-24 rounded bg-gray-300"></div>

      <div className="mt-3 lg:flex">
        {/* Left Image */}
        <div className="w-full">
          <div className="h-64 w-full rounded-sm bg-gray-300"></div>
        </div>

        {/* Right Content */}
        <div className="mt-3 w-full lg:mt-0 lg:ml-5">
          {/* Title + LoveButton */}
          <div className="mb-4 block justify-between md:flex">
            <div className="flex flex-row items-center justify-between gap-1 md:flex-col md:items-start md:justify-start">
              <div className="flex gap-2">
                <div className="h-6 w-40 rounded bg-gray-300"></div>
                <div className="h-8 w-8 rounded-full bg-gray-300"></div>
              </div>
            </div>
          </div>

          {/* Ingredients + Ratings */}
          <div className="text-custom-black mt-2 flex flex-col justify-between lg:flex-row">
            {/* Ingredients */}
            <div>
              <div className="mb-2 h-4 w-24 rounded bg-gray-300"></div>
              <ul className="list-disc space-y-2 pl-4.5">
                {[...Array(4)].map((_, index) => (
                  <li key={index} className="h-3 w-4/5 rounded bg-gray-300"></li>
                ))}
              </ul>
            </div>

            {/* Ratings */}
            <div className="mt-5 flex justify-between space-y-3 md:mt-0 md:block lg:mt-2">
              <div>
                <div className="mb-2 h-3 w-24 rounded bg-gray-300"></div>
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-4 w-4 rounded-full bg-gray-300"></div>
                  ))}
                  <div className="h-4 w-8 rounded bg-gray-300"></div>
                </div>
              </div>
              <div>
                <div className="mb-2 h-3 w-24 rounded bg-gray-300"></div>
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-4 w-4 rounded-full bg-gray-300"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="text-custom-black mt-4 border-t-1 border-dashed pt-2">
        <div className="mb-3 h-4 w-28 rounded bg-gray-300"></div>
        <ol className="list-decimal space-y-2 pl-4.5">
          {[...Array(5)].map((_, index) => (
            <li key={index} className="h-3 w-5/6 rounded bg-gray-300"></li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default DetailRecipeSkeleton;
