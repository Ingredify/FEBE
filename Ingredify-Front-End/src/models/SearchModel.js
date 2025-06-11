// models/SearchModel.js
import axios from 'axios';
import CONFIG from '../data/config';

export const searchRecipesByIngredient = async (ingredient) => {
  try {
    const response = await axios.get(`${CONFIG.BASE_URL}/recipe/search?ingredient=${ingredient}`);
    return response.data.data || [];
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to search recipes');
  }
};
