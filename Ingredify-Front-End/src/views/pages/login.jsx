import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { handleLogin } from '../../presenter/AuthPresenter';

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const onSuccess = (result) => {
    localStorage.setItem('token', result.token);
    localStorage.setItem('username', result.user.name);
    localStorage.setItem('email', result.user.email);
    navigate('/home');
  };

  const onError = (err) => {
    setErrorMsg(err.message || 'Login failed');
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const formData = { email, password };

    handleLogin(formData, onSuccess, onError);
  };

  return (
    <section className="bg-[url('/img/bg-img2.jpg')] bg-cover">
      <div className="absolute top-3 left-6 flex items-center gap-0.5">
        <img src="/img/logo.png" alt="logo ingredify" className="w-7 lg:w-9" />
        <p className="text-dark-green text-sm font-semibold md:text-base lg:text-lg">Ingredify</p>
      </div>

      <div className="flex h-screen items-center justify-center px-3 md:items-start md:pt-26 lg:mr-23 lg:items-center lg:justify-end lg:pt-0">
        <form
          onSubmit={handleSubmit}
          className="font-montserrat blue w-md rounded-2xl bg-white/30 px-10 py-8 shadow backdrop-blur-lg"
        >
          {errorMsg && (
            <p className="mb-2 text-center text-sm font-semibold text-red-600">~ {errorMsg} ~</p>
          )}

          <p className="mb-5 text-center text-2xl font-semibold">
            Sign in to <span className="text-light-green">Ingredify</span>
          </p>

          {/* Email */}
          <div className="group relative z-0 mb-5 flex w-full items-center border-b-2 border-gray-600">
            <input
              type="email"
              name="email"
              id="email"
              className="peer block w-full appearance-none bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:outline-none"
              placeholder=" "
              required
            />
            <i className="fa-solid fa-envelope"></i>
            <label
              htmlFor="email"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xs text-gray-800 transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium"
            >
              Email address
            </label>
          </div>

          {/* Password */}
          <div className="group relative z-0 mt-7 mb-5 flex w-full items-center border-b-2 border-gray-600">
            <input
              type="password"
              name="password"
              id="password"
              className="peer block w-full appearance-none bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:outline-none"
              placeholder=" "
              required
            />
            <i className="fa-solid fa-lock"></i>
            <label
              htmlFor="password"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xs text-gray-800 transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium"
            >
              Password
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`mt-3 flex w-full cursor-pointer items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-white ${loading ? 'bg-dark-green cursor-not-allowed' : 'bg-light-green hover:bg-dark-green'}`}
          >
            {loading ? (
              <>
                <svg className="mr-2 h-5 w-5 animate-spin text-white" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Login ...
              </>
            ) : (
              'Sign In'
            )}
          </button>

          <p className="mt-3 text-center text-xs">
            Don't have an account?
            <Link to="/signup" className="pl-1 font-semibold hover:font-bold">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
