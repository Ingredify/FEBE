import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FoodCard2 from '../components/FoodCard2';
import { fetchSearchResults } from '../../presenter/SearchPresenter';
import BackButton from '../elements/BackButton';
import Pagination from '../components/Pagination';
import FoodCardSkeleton from '../components/FoodCardSkeleton';

const SearchResultPage = () => {
  const [searchParams] = useSearchParams();
  const ingredient = searchParams.get('ingredient');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [meta, setMeta] = useState({ totalPages: 1, totalRecipes: 0 });
  const [page, setPage] = useState(1);
  const limit = 15;

  useEffect(() => {
    if (ingredient) {
      fetchSearchResults(ingredient, page, limit, setResults, setLoading, setError, setMeta);
    }
  }, [ingredient, page]);

  return (
    <section className="font-montserrat relative overflow-visible">
      <Navbar />
      <div className="mt-8 lg:mt-12">
        <main className="px-7 py-9 lg:px-24">
          <BackButton />
          <h1 className="mt-3 mb-5 text-xl font-semibold">
            Search Results for: <span className="text-light-green">{ingredient}</span>
          </h1>

          {loading && (
            <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {[...Array(10)].map((_, index) => (
                <FoodCardSkeleton key={index} />
              ))}
            </div>
          )}

          {error && <p className="text-red-500">Error: {error}</p>}
          {!loading && results.length === 0 && (
            <p className="text-gray-500">No recipes found for "{ingredient}".</p>
          )}

          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {results.map((recipe) => (
              <FoodCard2 key={recipe.id} recipe={recipe} />
            ))}
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
      <Footer />
    </section>
  );
};

export default SearchResultPage;
