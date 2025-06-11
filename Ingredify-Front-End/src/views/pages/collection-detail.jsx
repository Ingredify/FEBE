import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCollectionById, fetchRecipesInCollection } from '../../presenter/CollectionPresenter';

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
    <div className="mx-auto max-w-3xl p-4">
      <h1 className="mb-2 text-xl font-bold">{collection.name}</h1>
      <p className="mb-4 text-gray-700">{collection.description}</p>
      <h2 className="mb-2 text-lg font-semibold">Recipes in this collection:</h2>
      {recipes.length === 0 ? (
        <p className="text-sm text-gray-500">No recipes added yet.</p>
      ) : (
        <ul className="space-y-3">
          {recipes.map((recipe) => (
            <li key={recipe.id} className="rounded-md border p-3 hover:bg-gray-50">
              <p className="font-medium">{recipe.name}</p>
              <p className="text-sm text-gray-600">{recipe.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CollectionDetailPage;
