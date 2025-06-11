import { getAllRecipes, getRecommendedRecipes } from '../models/RecipeModel';
import { getToken } from '../models/AuthModel';

export async function fetchHomeRecommendedRecipes(setRecipes, setLoading, setError) {
  try {
    setLoading(true);
    const token = getToken();
    if (!token) throw new Error('Login for recommended recipes');

    const recipes = await getRecommendedRecipes(token);
    setRecipes(recipes);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
}

export async function fetchAllRecipes(setRecipes, setLoading, setError, page, limit, setMeta) {
  try {
    setLoading(true);
    const recipes = await getAllRecipes(page, limit);
    setRecipes(recipes.data || []);
    if (setMeta && recipes.meta) {
      setMeta(recipes.meta);
    }
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
}
