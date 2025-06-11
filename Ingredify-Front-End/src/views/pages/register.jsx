import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { handleRegister } from '../../presenter/AuthPresenter';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return setErrorMsg('Passwords do not match!');
    }
    setLoading(true);

    const dataUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    await handleRegister(
      dataUser,
      () => {
        setLoading(false);
        navigate('/signin');
      },
      (err) => {
        setLoading(false);
        setErrorMsg(err?.message || 'Failed to register');
      },
    );
  };

  return (
    <section className="bg-[url('./img/bg-img2.jpg')] bg-cover">
      {/* logo */}
      <div className="absolute top-3 left-6 flex items-center gap-0.5">
        <img src="./img/logo.png" alt="logo ingredify" className="w-7 lg:w-9" />
        <p className="text-dark-green text-sm font-semibold md:text-base lg:text-lg">Ingredify</p>
      </div>

      <div className="flex h-screen items-center justify-center px-3 md:items-start md:pt-26 lg:mr-23 lg:items-center lg:justify-end lg:pt-0">
        <form
          onSubmit={onSubmit}
          className="font-montserrat blue w-md rounded-2xl bg-white/30 px-10 py-8 shadow backdrop-blur-lg"
        >
          {errorMsg && (
            <p className="mb-2 text-center text-sm font-semibold text-red-600">~ {errorMsg} ~</p>
          )}

          <p className="mb-5 text-center text-2xl font-semibold">Create your account</p>

          {/* Name */}
          <div className="group relative z-0 mb-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="peer block w-full border-0 border-b-2 border-gray-600 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:ring-0 focus:outline-none"
              placeholder=" "
              required
            />
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xs text-gray-800 transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75">
              Name
            </label>
          </div>

          {/* Email */}
          <div className="group relative z-0 mb-5">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="peer block w-full border-0 border-b-2 border-gray-600 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:ring-0 focus:outline-none"
              placeholder=" "
              required
            />
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xs text-gray-800 transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75">
              Email address
            </label>
          </div>

          {/* Password */}
          <div className="group relative z-0 mb-5">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="peer block w-full border-0 border-b-2 border-gray-600 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:ring-0 focus:outline-none"
              placeholder=" "
              required
            />
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xs text-gray-800 transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75">
              Password
            </label>
          </div>

          {/* Confirm Password */}
          <div className="group relative z-0 mb-5">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="peer block w-full border-0 border-b-2 border-gray-600 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:ring-0 focus:outline-none"
              placeholder=" "
              required
            />
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xs text-gray-800 transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75">
              Confirm Password
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
                Processing...
              </>
            ) : (
              'Sign Up'
            )}
          </button>

          <p className="mt-3 text-center text-xs">
            Already have an account?
            <Link to="/signin" className="pl-1 font-semibold hover:font-bold">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
