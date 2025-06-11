// presenter/detailPresenter.js
import { getRecipeDetail } from '../models/RecipeModel';

export async function fetchRecipeDetail(setRecipe, setLoading, setError, foodId) {
  try {
    setLoading(true);
    const recipe = await getRecipeDetail(foodId);
    setRecipe(recipe.data || {});
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
}
