import {
  addCollection,
  getUserCollection,
  getUserCollectionById,
  editCollection,
  deleteCollection,
  addRecipeToCollection,
  getRecipeInCollection,
} from '../models/CollectionModel';
import { getToken } from '../models/AuthModel';

export const handleAddCollection = async (dataCollection, onSuccess, onError) => {
  try {
    const token = getToken();
    await addCollection(dataCollection, token);
    onSuccess();
  } catch (err) {
    onError(err);
  }
};

export const fetchUserCollections = async (setCollections, setError) => {
  try {
    const token = getToken();
    const collections = await getUserCollection(token);
    setCollections(collections.data);
  } catch (err) {
    setError(err.message || 'Failed to fetch collections');
  }
};

export const fetchCollectionById = async (collectionId, setCollection, setError) => {
  try {
    const token = getToken();
    const response = await getUserCollectionById(collectionId, token);
    setCollection(response.data);
  } catch (err) {
    setError?.(err.message || 'Failed to fetch collection');
  }
};

export const handleEditCollection = async (collectionId, name, description, onSuccess, onError) => {
  try {
    const token = getToken();
    await editCollection(collectionId, name, description, token);
    onSuccess?.();
  } catch (err) {
    onError?.(err);
  }
};

export const handleDeleteCollection = async (collectionId, onSuccess, onError) => {
  try {
    const token = getToken();
    await deleteCollection(collectionId, token);
    onSuccess?.();
  } catch (err) {
    onError?.(err);
  }
};

export const handleAddRecipeToCollection = async (collectionId, recipeId, onSuccess, onError) => {
  try {
    const token = getToken();
    await addRecipeToCollection(collectionId, recipeId, token);
    onSuccess?.();
  } catch (err) {
    onError?.(err);
  }
};

export const fetchRecipesInCollection = async (collectionId, setRecipes, setError) => {
  try {
    const token = getToken();
    const response = await getRecipeInCollection(collectionId, token);
    setRecipes(response.data);
  } catch (err) {
    setError?.(err.message || 'Failed to fetch recipes in collection');
  }
};
