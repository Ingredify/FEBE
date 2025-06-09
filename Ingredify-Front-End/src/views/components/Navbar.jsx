import { Link } from 'react-router-dom';

const Navbar = ({ separateLogin }) => {
  return (
    <nav
      className={`font-montserrat fixed top-0 right-0 left-0 z-20 flex items-center px-7 py-2 lg:px-24 ${!separateLogin ? 'z-40 bg-white shadow-sm' : ''}`}
    >
      <div
        className={`flex items-center space-x-4 sm:space-x-6 md:space-x-45 lg:space-x-50 ${!separateLogin ? 'w-full justify-between' : ''}`}
      >
        <div className="flex items-center gap-0.5">
          <img src="./img/logo.png" alt="logo ingredify" className="w-7 lg:w-9" />
          <Link
            to={'/home'}
            className="text-dark-green text-sm font-semibold md:text-base lg:text-lg"
          >
            Ingredify
          </Link>
        </div>

        <div className={`text-custom-gray flex gap-4 text-xs md:text-sm lg:gap-10`}>
          <Link className="hover:text-dark-green transition-all hover:font-semibold" to="/home">
            Home
          </Link>
          <Link className="hover:text-dark-green transition-all hover:font-semibold" to="/about">
            About
          </Link>
          <Link
            className="hover:text-dark-green transition-all hover:font-semibold"
            to="/collections"
          >
            Collections
          </Link>

          {/* ini buat dipage lain selain welcome page, loginnya nyatu*/}
          {!separateLogin && (
            <Link
              to="/signin"
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
          className="md:bg-light-green md:hover:bg-dark-green text-custom-gray hover:text-dark-green ml-auto rounded-3xl bg-none px-2 py-1.5 text-xs transition-all hover:font-semibold md:px-4 md:py-2 md:text-sm md:text-white md:hover:text-white"
          to="/signin"
        >
          Log in
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
