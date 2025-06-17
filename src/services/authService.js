import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

export const login = async (email, password) => {
  const response = await axios.post(`${API}/auth/login`, { email, password });
  return response.data;
};
