import { Link } from 'react-router-dom';

const Navbar = ({ separateLogin }) => {
  return (
    <nav
      className={`font-montserrat fixed top-0 right-0 left-0 z-20 flex items-center px-7 py-2 lg:px-24 ${!separateLogin ? 'bg-white' : ''}`}
    >
      <div
        className={`flex items-center space-x-3 md:space-x-32 lg:space-x-50 ${!separateLogin ? 'w-full justify-between' : ''}`}
      >
        <div className="flex items-center gap-0.5">
          <img src="./img/logo.png" alt="logo ingredify" className="w-7 lg:w-9" />
          <p className="text-dark-green text-sm font-semibold md:text-base lg:text-lg">Ingredify</p>
        </div>

        <div className={`text-custom-gray flex gap-4 text-xs md:text-sm lg:gap-10 lg:text-sm`}>
          <Link className="hover:text-dark-green transition-all hover:font-semibold" to="/home">
            Home
          </Link>
          <Link className="hover:text-dark-green transition-all hover:font-semibold" to="/about">
            About
          </Link>
          <Link
            className="hover:text-dark-green transition-all hover:font-semibold"
            to="/collection"
          >
            Collection
          </Link>

          {/* ini buat dipage lain selain welcome page, loginnya nyatu*/}
          {!separateLogin && (
            <Link
              to="/login"
              className="hover:text-dark-green text-custom-gray transition-all hover:font-semibold"
            >
              Log in
            </Link>
          )}
        </div>
      </div>

      {/* ini buat welcome page, jadi loginnya kepisah */}
      {separateLogin && (
        <Link
          className="bg-light-green hover:bg-dark-green ml-auto hidden rounded-3xl px-2.5 py-1.5 text-xs text-white transition-all sm:block lg:block lg:px-4 lg:py-2 lg:text-sm"
          to="/login"
        >
          <p className="font-medium">Log in</p>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
