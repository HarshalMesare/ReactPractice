import axios from 'axios';
import { postsActions } from '../../../redux/slices/postsSlice'; 

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = () => async (dispatch) => {
  try {
    dispatch(postsActions.setLoading(true)); 

    const response = await axios.get(`${API_BASE_URL}/posts`);
    if (response.status === 200) {
      dispatch(postsActions.setPosts(response.data)); 
    }
    dispatch(postsActions.setLoading(false)); 
  } catch (error) {
    console.error('Error fetching posts:', error);
    dispatch(postsActions.setLoading(false)); 
    throw error;
  }
};
export const createPost = async (dispatch, postData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/posts`, postData);
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};