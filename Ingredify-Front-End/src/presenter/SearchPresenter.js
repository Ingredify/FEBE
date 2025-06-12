// presenter/SearchPresenter.js
import { searchRecipesByIngredient } from '../models/SearchModel';

export const fetchSearchResults = async (
  ingredient,
  page,
  limit,
  setResults,
  setLoading,
  setError,
  setMeta,
) => {
  try {
    setLoading(true);
    const data = await searchRecipesByIngredient(ingredient, page, limit);
    setResults(data.data || []);
    if (setMeta && data.meta) {
      setMeta(data.meta);
    }
    setError('');
  } catch (error) {
    setError(error.message);
    setResults([]);
  } finally {
    setLoading(false);
  }
};
