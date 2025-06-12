// presenter/detailPresenter.js
import {
  getRecipeAverageRating,
  postUserRecipeRating,
  getUserRecipeRating,
} from '../models/RatingModel';
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

export const fetchRecipeRating = async (recipeId, setAverageRating, setTotalRating, setError) => {
  try {
    const response = await getRecipeAverageRating(recipeId);
    setAverageRating(response.averageRating);
    setTotalRating(response.totalRating);
  } catch (err) {
    setError(err.message);
  }
};

export const submitUserRating = async (recipeId, rating, setSubmitting, onSuccess, onError) => {
  setSubmitting(true);
  try {
    await postUserRecipeRating(recipeId, rating);
    onSuccess();
  } catch (error) {
    onError(error);
  } finally {
    setSubmitting(false);
  }
};

export const fetchUserRecipeRating = async (recipeId, setYourRating) => {
  try {
    const rating = await getUserRecipeRating(recipeId);
    setYourRating(rating);
  } catch (error) {
    console.error('Gagal ambil rating user:', error);
    setYourRating(0);
  }
};
