// models/SearchModel.js
import axios from 'axios';
import CONFIG from '../data/config';

const BASE_URL = CONFIG.BASE_URL;

export const searchRecipesByIngredient = async (ingredient, page = 1, limit = 15) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/recipe/search?ingredient=${ingredient}&page=${page}&limit=${limit}`,
    );
    return response.data || [];
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to search recipes');
  }
};
