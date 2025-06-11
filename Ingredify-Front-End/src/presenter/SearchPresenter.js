// presenter/SearchPresenter.js
import { searchRecipesByIngredient } from '../models/SearchModel';

export const fetchSearchResults = async (ingredient, setResults, setLoading, setError) => {
  try {
    setLoading(true);
    const data = await searchRecipesByIngredient(ingredient);
    setResults(data);
    setError('');
  } catch (error) {
    setError(error.message);
    setResults([]);
  } finally {
    setLoading(false);
  }
};
