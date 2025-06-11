import axios from 'axios';
import CONFIG from '../data/config';
import { getToken } from './AuthModel';

const BASE_URL = CONFIG.BASE_URL;

export const getRecommendedRecipes = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/recommendation`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.data || [];
  } catch (error) {
    console.error('Error in getRecommendedRecipes:', error.response?.data || error.message);
    throw error;
  }
};

export const getAllRecipes = async (page = 1, limit = 10) => {
  try {
    const response = await axios.get(`${BASE_URL}/recipe?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Error in getAllRecipes:', error.response?.data || error.message);
    throw error;
  }
};

export const getRecipeDetail = async (foodId) => {
  try {
    const response = await axios.get(`${BASE_URL}/recipe/${foodId}`);
    return response.data;
  } catch (error) {
    console.error('Error in recipeDetail:', error.response?.data || error.message);
    throw error;
  }
};
