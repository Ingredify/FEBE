import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FoodCard2 from '../components/FoodCard2';
import { fetchSearchResults } from '../../presenter/SearchPresenter';
import BackButton from '../elements/BackButton';

const SearchResultPage = () => {
  const [searchParams] = useSearchParams();
  const ingredient = searchParams.get('ingredient');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (ingredient) {
      fetchSearchResults(ingredient, setResults, setLoading, setError);
    }
  }, [ingredient]);

  return (
    <section className="font-montserrat relative overflow-visible">
      <Navbar />
      <div className="lg:mt-12">
        <main className="px-7 py-9 lg:px-24">
          <BackButton />
          <h1 className="mt-3 mb-5 text-xl font-semibold">
            Search Results for: <span className="text-light-green">{ingredient}</span>
          </h1>

          {loading && <p className="text-gray-500">Loading...</p>}
          {error && <p className="text-red-500">Error: {error}</p>}
          {!loading && results.length === 0 && (
            <p className="text-gray-500">No recipes found for "{ingredient}".</p>
          )}

          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {results.map((recipe) => (
              <FoodCard2 key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </section>
  );
};

export default SearchResultPage;
