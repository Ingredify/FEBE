import { loginUser, registerUser } from '../models/AuthModel';

export const handleLogin = async (formData, onSuccess, onError) => {
  try {
    const result = await loginUser(formData);
    onSuccess(result);
  } catch (err) {
    onError(err);
  }
};

export const handleRegister = async (formData, onSuccess, onError) => {
  try {
    const result = await registerUser(formData);
    onSuccess(result);
  } catch (err) {
    onError(err);
  }
};
