// import { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import FoodCard2 from '../components/FoodCard2';
import Footer from '../components/Footer';
import MenuButton from '../elements/MenuButton';
import BackgroundImgFood from '../elements/BackgroundImgFood';
import { fetchAllRecipes, fetchHomeRecommendedRecipes } from '../../presenter/HomePresenter';
import { useEffect, useState } from 'react';
import Pagination from '../components/Pagination';
import { getToken } from '../../models/AuthModel';
import { useNavigate } from 'react-router-dom';
import SavedToCollection from '../components/SavedToCollection';
import FoodCardSkeleton from '../components/FoodCardSkeleton';

const HomePage = () => {
  // const [showSidebar, setShowSidebar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [allRecipes, setAllRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [allLoading, setAllLoading] = useState(false);
  const [allError, setAllError] = useState('');
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState({ totalPages: 1, totalRecipes: 0 });
  const limit = 10;
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const token = getToken();
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    fetchHomeRecommendedRecipes(setRecipes, setLoading, setError);
  }, []);

  useEffect(() => {
    fetchAllRecipes(setAllRecipes, setAllLoading, setAllError, page, limit, setMeta);
  }, [page]);

  return (
    <section className="font-montserrat relative overflow-visible">
      <Navbar />
      <div className="lg:mt-12">
        <div className="img-background relative min-h-84 text-white lg:min-h-92">
          <div className="relative px-6 pt-20 text-center lg:pt-16">
            <h1 className="mb-2 text-2xl font-bold md:text-3xl lg:text-4xl">
              Find Delicious Recipes With Ingredients You Have
            </h1>
            <h2 className="mb-4 text-base md:text-lg lg:text-xl">
              Just type what's in your kitchen — we'll find the perfect recipes for you.
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault(); // mencegah reload page default dari form
                if (searchInput.trim()) {
                  navigate(`/search?ingredient=${encodeURIComponent(searchInput.trim())}`);
                }
              }}
              className="mx-auto flex w-3/4 justify-center gap-2 rounded-xl bg-white px-1.5 py-1 text-sm sm:w-1/2 md:w-2/5 lg:w-1/3 lg:py-1"
            >
              <input
                placeholder="Enter ingredients (e.g., eggs, rice, tomato)"
                type="search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="text-custom-black w-full rounded p-2 placeholder:text-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                className="hover:bg-dark-green bg-light-green flex items-center gap-1 rounded-lg px-2 py-0 text-xs font-semibold text-white hover:cursor-pointer md:gap-2 lg:px-4 lg:py-2 lg:text-sm"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
                Search
              </button>
            </form>
          </div>
        </div>
        <main className="px-7 py-9 pb-20 lg:px-24">
          {/* <Sidebar show={showSidebar} setShowSidebar={setShowSidebar} /> */}
          {isLoggedIn && (
            <div className="mb-12 flex flex-col">
              <h2 className="text-custom-black mb-4 text-xl font-semibold">Recommended Recipes</h2>
              {loading && (
                <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {[...Array(5)].map((_, idx) => (
                    <FoodCardSkeleton key={idx} />
                  ))}
                </div>
              )}
              {error && <p className="text-red-500">Error: {error}</p>}

              <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {recipes.map((recipe) => (
                  <FoodCard2 key={recipe.foodId} recipe={recipe} />
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col">
            <h2 className="text-custom-black mb-4 text-xl font-semibold">All Recipes</h2>
            {allLoading && (
              <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {[...Array(10)].map((_, idx) => (
                  <FoodCardSkeleton key={idx} />
                ))}
              </div>
            )}
            {allError && <p className="text-red-500">Error: {allError}</p>}

            <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {allRecipes.map((recipe) => (
                <FoodCard2 key={recipe.foodId} recipe={recipe} />
              ))}
            </div>
          </div>
          <div className="mt-5 flex items-center justify-between border-t border-gray-200 bg-white">
            <div className="mt-3 flex flex-1 flex-col items-center justify-between md:flex-row">
              <div className="flex gap-2 text-sm text-gray-700">
                Showing
                <p className="text-light-green font-semibold">Page {page}</p>
                of
                <p className="text-light-green font-semibold">{meta.totalPages}</p>
                results
              </div>

              <div>
                <Pagination page={page} setPage={setPage} totalPages={meta.totalPages} />
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* <MenuButton showSidebar={showSidebar} setShowSidebar={setShowSidebar} /> */}

      <BackgroundImgFood />
      <Footer />
    </section>
  );
};

export default HomePage;
