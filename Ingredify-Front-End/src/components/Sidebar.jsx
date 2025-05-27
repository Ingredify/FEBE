const Sidebar = () => {
  return (
    <aside className="hidden w-1/2 md:block lg:w-1/3">
      <h3 className="font-montez text-light-green mb-5 text-5xl">Menu</h3>
      <div className="font-montserrat space-y-5">
        <div>
          <p className="text-light-green mb-1.5 font-medium">Type</p>
          <div className="text-custom-black flex flex-col items-start gap-1 text-start">
            <button>Appetizers</button>
            <button>Main Course</button>
            <button>Side Dishes</button>
            <button>Desserts</button>
            <button>Snacks</button>
          </div>
        </div>
        <div>
          <p className="text-light-green mb-1.5 font-medium">Type</p>
          <div className="text-custom-black flex w-fit flex-col items-start gap-1">
            <button>Appetizers</button>
            <button>Main Course</button>
            <button>Side Dishes</button>
            <button>Desserts</button>
            <button>Snacks</button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
