import { useEffect, useState, useRef } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { getToken } from '../../models/AuthModel';

const Navbar = ({ separateLogin }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const token = getToken();
    const storedUsername = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('email');

    setIsLoggedIn(!!token);
    if (storedUsername && storedEmail) {
      setUsername(storedUsername);
      setEmail(storedEmail);
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    setIsLoggedIn(false);
    setUsername('');
    setIsDropdownOpen(false);
    Navigate('/signin');
  };

  const initialLetter = username ? username.charAt(0).toUpperCase() : email.charAt(0).toUpperCase();

  return (
    <nav
      className={`font-montserrat fixed top-0 right-0 left-0 z-20 flex items-center px-7 py-2 lg:px-24 ${!separateLogin ? 'z-40 bg-white shadow-sm' : ''}`}
    >
      <div
        className={`flex items-center space-x-4 sm:space-x-6 md:space-x-45 lg:space-x-50 ${!separateLogin ? 'w-full justify-between' : ''}`}
      >
        <div className="flex items-center gap-0.5">
          <img src="/img/logo.png" alt="logo ingredify" className="w-7 lg:w-9" />
          <Link
            to={'/home'}
            className="text-dark-green text-sm font-semibold md:text-base lg:text-lg"
          >
            Ingredify
          </Link>
        </div>

        <div className="text-custom-gray flex items-center gap-4 text-xs md:text-sm lg:gap-10">
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

          {!separateLogin && !isLoggedIn && (
            <Link
              to="/signin"
              className="hover:text-dark-green text-custom-gray transition-all hover:font-semibold"
            >
              Log in
            </Link>
          )}

          {!separateLogin && isLoggedIn && (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="text-dark-green cursor-pointer text-sm font-semibold hover:underline"
              >
                <p className="hidden md:block">{username}</p>
                <div className="bg-dark-green flex h-6 w-6 items-center justify-center rounded-full text-base font-medium text-white hover:bg-[#457b6c] md:hidden">
                  {initialLetter}
                </div>
              </button>
              {isDropdownOpen && (
                <div className="absolute top-6 right-0 z-50 mt-2 flex flex-col overflow-hidden rounded-md bg-white px-4 py-3 shadow-lg">
                  <div className="flex items-center justify-center gap-1.5 p-1">
                    <div className="bg-dark-green flex h-6 w-6 items-center justify-center rounded-full text-base font-medium text-white">
                      {initialLetter}
                    </div>
                    <p className="text-xs font-semibold">{email}</p>
                  </div>
                  <div className="bg-custom-black my-2 h-[0.5px]"></div>
                  <button
                    onClick={handleLogout}
                    className="flex w-full cursor-pointer items-center justify-center gap-2 px-4 py-2 text-center text-xs font-medium text-red-600 hover:bg-gray-100 hover:font-semibold"
                  >
                    <i class="fa-solid fa-right-from-bracket"></i>
                    <p>Logout</p>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Welcome page: login button separated */}
      {separateLogin && !isLoggedIn && (
        <Link
          className="md:bg-light-green md:hover:bg-dark-green text-custom-gray hover:text-dark-green ml-auto rounded-3xl bg-none px-2 py-1.5 text-xs transition-all hover:font-semibold md:px-4 md:py-2 md:text-sm md:text-white md:hover:text-white"
          to="/signin"
        >
          Log in
        </Link>
      )}

      {/* Welcome page: if logged in */}
      {separateLogin && isLoggedIn && (
        <div className="relative ml-auto" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="text-dark-green text-sm font-semibold hover:underline"
          >
            Hi, {username}
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 z-50 mt-2 w-32 rounded-md border border-gray-200 bg-white shadow-lg">
              <button
                onClick={handleLogout}
                className="block w-full px-4 py-2 text-left text-sm text-red-500 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
