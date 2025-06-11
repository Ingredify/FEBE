import axios from 'axios';
import CONFIG from '../data/config';

const BASE_URL = CONFIG.BASE_URL;

export function getToken() {
  return localStorage.getItem('token');
}

export const registerUser = async (dataUser) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, dataUser);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const loginUser = async (dataUser) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, dataUser);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
