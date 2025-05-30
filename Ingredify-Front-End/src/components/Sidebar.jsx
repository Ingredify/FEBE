const Sidebar = ({ show, setShowSidebar }) => {
  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-full w-2/3 max-w-xs p-5 transition-all duration-300 ease-in-out md:z-30 ${
        show ? 'translate-x-0 bg-white' : '-translate-x-full'
      } md:sticky md:top-16 md:w-[44%] md:translate-x-0 lg:w-[20%] lg:px-0`}
    >
      {/* Tombol close hanya untuk mobile */}
      <div className="mb-4 flex justify-end md:hidden">
        <button
          onClick={() => setShowSidebar(false)}
          className="hover:text-dark-green cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <h3 className="font-montez text-light-green mb-5 text-5xl">Menu</h3>
      <div className="font-montserrat space-y-5">
        <div>
          <p className="text-light-green mb-1.5 font-medium">Type</p>
          <div className="text-custom-black text-sl flex flex-col items-start gap-1 text-start">
            <button className="hover:text-light-green cursor-pointer transition-all hover:font-semibold">
              Appetizers
            </button>
            <button className="hover:text-light-green cursor-pointer transition-all hover:font-semibold">
              Main Course
            </button>
            <button className="hover:text-light-green cursor-pointer transition-all hover:font-semibold">
              Side Dishes
            </button>
            <button className="hover:text-light-green cursor-pointer transition-all hover:font-semibold">
              Desserts
            </button>
            <button className="hover:text-light-green cursor-pointer transition-all hover:font-semibold">
              Snacks
            </button>
          </div>
        </div>
        <div>
          <p className="text-light-green mb-1.5 font-medium">Type</p>
          <div className="text-custom-black flex w-fit flex-col items-start gap-1">
            <button className="hover:text-light-green cursor-pointer transition-all hover:font-semibold">
              Appetizers
            </button>
            <button className="hover:text-light-green cursor-pointer transition-all hover:font-semibold">
              Main Course
            </button>
            <button className="hover:text-light-green cursor-pointer transition-all hover:font-semibold">
              Side Dishes
            </button>
            <button className="hover:text-light-green cursor-pointer transition-all hover:font-semibold">
              Desserts
            </button>
            <button className="hover:text-light-green cursor-pointer transition-all hover:font-semibold">
              Snacks
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
