const MenuButton = ({ showSidebar, setShowSidebar }) => {
  return (
    <div
      className="bg-light-green hover:bg-dark-green fixed right-4 bottom-4 z-50 block cursor-pointer rounded-full p-2 text-white shadow-2xl md:hidden"
      onClick={() => setShowSidebar(!showSidebar)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-9"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
  );
};

export default MenuButton;
