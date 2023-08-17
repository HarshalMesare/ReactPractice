// api.js
import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async () => {
  const response = await axios.get(`${API_BASE_URL}/posts`);
  return response.data;
};

export const createPost = async (params) => {
  const response = await axios.post(`${API_BASE_URL}/posts`, params);
  return response.data;
};
