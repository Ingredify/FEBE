import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  deleteRecipeFromCollection,
  fetchCollectionById,
  fetchRecipesInCollection,
} from '../../presenter/CollectionPresenter';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FoodCard2 from '../components/FoodCard2';
import BackButton from '../elements/BackButton';
import BackgroundImgFood from '../elements/BackgroundImgFood';
import RecipeCardSkeleton from '../components/RecipeCardSkeleton';

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

  const handleRemove = async (recipeId) => {
    await deleteRecipeFromCollection(collection.id, recipeId, setRecipes, setError);
  };

  if (loading) {
    return (
      <section className="relative flex min-h-screen w-full flex-col overflow-visible">
        <Navbar />
        <div className="mt-7 flex-grow px-7 py-9 lg:px-24">
          <BackButton />
          <div className="mb-4 h-6 w-1/2 animate-pulse rounded bg-gray-300"></div>
          <div className="mb-6 h-4 w-1/3 animate-pulse rounded bg-gray-200"></div>
          <h2 className="mb-4 text-lg font-semibold">Recipes in this collection:</h2>
          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {[...Array(10)].map((_, i) => (
              <RecipeCardSkeleton key={i} />
            ))}
          </div>
        </div>
        <BackgroundImgFood />
        <Footer />
      </section>
    );
  }

  if (error) return <p className="p-4 text-center text-red-500">{error}</p>;
  if (!collection) return <p className="p-4 text-center">Collection not found.</p>;

  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-visible">
      <Navbar />
      <div className="mt-7 flex-grow px-7 py-9 lg:px-24">
        <BackButton />
        <div className="text-custom-black flex items-center gap-3">
          <i className="fa-solid fa-folder-open"></i>
          <h1 className="mt-2 mb-2 text-xl font-bold">{collection.name}</h1>
        </div>
        <p className="mb-4 text-gray-700">{collection.description}</p>
        <h2 className="mb-2 text-lg font-semibold">Recipes in this collection:</h2>
        {recipes.length === 0 ? (
          <p className="text-sm text-gray-500">No recipes added yet.</p>
        ) : (
          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {recipes.map((recipe) => (
              <div key={recipe.recipe.foodId} className="relative">
                <FoodCard2 recipe={recipe} />
                <button
                  onClick={() => handleRemove(recipe.recipe.id)}
                  className="absolute top-2 right-2 cursor-pointer rounded-full bg-red-500 px-2 py-1 text-xs text-white hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
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
