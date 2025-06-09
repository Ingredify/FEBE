const BackgroundImgFood = ({ position = '-left-30' }) => {
  return (
    <img
      src="./img/bg-food.png"
      alt="background image"
      className={`pointer-events-none absolute bottom-0 z-0 mx-auto opacity-8 ${position} md:w-xl lg:w-lg`}
    />
  );
};

export default BackgroundImgFood;
