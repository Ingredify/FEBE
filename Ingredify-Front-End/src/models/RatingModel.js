import axios from 'axios';
import { getToken } from './AuthModel';
import CONFIG from '../data/config';

const BASE_URL = CONFIG.BASE_URL;

export const getRecipeAverageRating = async (recipeId) => {
  try {
    const response = await axios.get(`${BASE_URL}/recipe/${recipeId}/average-rating`);
    console.log('Average rating:', response.data);
    return response.data.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to get average rating.';
  }
};

export const postUserRecipeRating = async (recipeId, rating) => {
  try {
    const token = getToken();
    const response = await axios.post(
      `${BASE_URL}/recipe/${recipeId}/rate`,
      { rating },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to post rating.';
  }
};

export const getUserRecipeRating = async (recipeId) => {
  try {
    const token = getToken();
    const response = await axios.get(`${BASE_URL}/recipe/${recipeId}/rate`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data.ratingValue;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to get rating.';
  }
};

export const deleteUserRecipeRating = async (recipeId) => {
  try {
    const token = getToken();
    const response = await axios.delete(`${BASE_URL}/recipe/${recipeId}/rate`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to delete rating.';
  }
};
