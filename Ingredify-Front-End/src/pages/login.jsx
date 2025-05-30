import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <section className="bg-[url('./img/bg-img2.jpg')] bg-cover">
      <div className="absolute top-3 left-6 flex items-center gap-0.5">
        <img src="./img/logo.png" alt="logo ingredify" className="w-7 lg:w-9" />
        <p className="text-dark-green text-sm font-semibold md:text-base lg:text-lg">Ingredify</p>
      </div>

      <div className="flex h-screen items-center justify-center px-3 md:items-start md:pt-26 lg:mr-23 lg:items-center lg:justify-end lg:pt-0">
        <form class="font-montserrat blue w-md rounded-2xl bg-white/30 px-10 py-8 shadow backdrop-blur-lg">
          <p className="mb-5 text-center text-2xl font-semibold">
            Sign in to <span className="text-light-green">Ingredify</span>
          </p>
          <div class="group justify-beetween relative z-0 mb-5 flex w-full items-center border-0 border-b-2 border-gray-600">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              class="peer block w-full appearance-none bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:ring-0 focus:outline-none"
              placeholder=" "
              required
            />
            <i className="fa-solid fa-envelope"></i>
            <label
              for="floating_email"
              class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xs text-gray-800 transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
            >
              Email address
            </label>
          </div>
          <div class="group justify-beetween relative z-0 mt-7 mb-5 flex w-full items-center border-0 border-b-2 border-gray-600">
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              class="peer block w-full appearance-none bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:ring-0 focus:outline-none"
              placeholder=" "
              required
            />
            <i className="fa-solid fa-lock"></i>
            <label
              for="floating_password"
              class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xs text-gray-800 transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
            >
              Password
            </label>
          </div>

          <button
            type="submit"
            class="bg-light-green hover:bg-dark-green focus:ring-light-green mt-3 w-full cursor-pointer rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4 focus:outline-none"
          >
            Sign In
          </button>
          <p className="mt-3 text-center text-xs">
            Dont't have an account?
            <Link to="/signup" className="pl-1 font-semibold hover:font-bold">
              register
            </Link>
          </p>
        </form>{' '}
      </div>
    </section>
  );
};

export default LoginPage;
