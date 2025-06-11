import axios from 'axios';
import CONFIG from '../data/config';

const BASE_URL = CONFIG.BASE_URL;

export const addCollection = async (dataCollection, token) => {
  // const payload = { dataCollection };
  try {
    const response = await axios.post(`${BASE_URL}/collection`, dataCollection, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error in addCollection:', error.response?.data || error.message);
    throw error;
  }
};

export const getUserCollection = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/collection`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error in getUserCollection:', error.response?.data || error.message);
    throw error;
  }
};

export const getUserCollectionById = async (collectionId, token) => {
  try {
    const response = await axios.get(`${BASE_URL}/collection/${collectionId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error in getUserCollectionById:', error.response?.data || error.message);
    throw error;
  }
};

export const editCollection = async (collectionId, name, description, token) => {
  //? check if name or description is provided
  if (!name && !description) {
    console.warn('No data to update');
    return null;
  }
  try {
    const payload = {};
    if (name) payload.name = name;
    if (description) payload.description = description;
    const response = await axios.put(`${BASE_URL}/collection/${collectionId}`, payload, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error in editCollection:', error.response?.data || error.message);
    throw error;
  }
};

export const addRecipeToCollection = async (collectionId, recipeId, token) => {
  const payload = { collectionId, recipeId };
  try {
    const response = await axios.post(`${BASE_URL}/collection/recipe`, payload, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error in addRecipeToCollection:', error.response?.data || error.message);
    throw error;
  }
};

export const getRecipeInCollection = async (collectionId, token) => {
  try {
    const response = await axios.get(`${BASE_URL}/collection/${collectionId}/recipe`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error in getRecipeInCollection:', error.response?.data || error.message);
    throw error;
  }
};

export const deleteCollection = async (collectionId, token) => {
  try {
    const response = await axios.delete(`${BASE_URL}/collection/${collectionId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error in deleteCollection:', error.response?.data || error.message);
    throw error;
  }
};
