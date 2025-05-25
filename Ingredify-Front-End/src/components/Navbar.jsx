import { Link } from 'react-router-dom';

const Navbar = ({ separateLogin }) => {
  return (
    <nav className="font-montserrat fixed top-0 right-0 left-0 z-20 flex items-center px-24 py-2">
      <div className="flex items-center space-x-50">
        <div className="flex items-center gap-0.5">
          <img src="./img/logo.png" alt="logo ingredify" className="w-9" />
          <p className="text-dark-green text-lg font-semibold">Ingredify</p>
        </div>

        <div className="text-custom-gray flex gap-10 text-sm">
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
          className="bg-light-green hover:bg-dark-green z-40 ml-auto rounded-3xl px-4 py-2 text-sm text-white transition-all"
          to="/login"
        >
          <p className="font-medium">Log in</p>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
