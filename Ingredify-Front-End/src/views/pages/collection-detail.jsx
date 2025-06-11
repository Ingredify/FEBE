import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCollectionById, fetchRecipesInCollection } from '../../presenter/CollectionPresenter';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FoodCard2 from '../components/FoodCard2';
import BackButton from '../elements/BackButton';
import BackgroundImgFood from '../elements/BackgroundImgFood';

const CollectionDetailPage = () => {
  const { id } = useParams();
  const [collection, setCollection] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCollection = async () => {
      setLoading(true);
      await fetchCollectionById(id, setCollection, setError);
      await fetchRecipesInCollection(id, setRecipes, setError);
      setLoading(false);
    };

    loadCollection();
  }, [id]);

  if (loading) return <p className="p-4 text-center">Loading...</p>;
  if (error) return <p className="p-4 text-center text-red-500">{error}</p>;
  if (!collection) return <p className="p-4 text-center">Collection not found.</p>;

  return (
    <section className="relative w-full overflow-visible">
      <Navbar />
      <div className="mt-7 px-7 py-9 lg:px-24">
        <BackButton />
        <h1 className="mt-2 mb-2 text-xl font-bold">{collection.name}</h1>
        <p className="mb-4 text-gray-700">{collection.description}</p>
        <h2 className="mb-2 text-lg font-semibold">Recipes in this collection:</h2>
        {recipes.length === 0 ? (
          <p className="text-sm text-gray-500">No recipes added yet.</p>
        ) : (
          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {recipes.map((recipe) => (
              <FoodCard2 key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
      <BackgroundImgFood />
      <Footer />
    </section>
  );
};

export default CollectionDetailPage;
