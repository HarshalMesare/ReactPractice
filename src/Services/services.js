import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPosts, setLoading, addPost } from './redux/postsSlice';
import { fetchPosts, createPost } from './services/api';

export default function AlertDialogSlide() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsData.posts);
  const loading = useSelector((state) => state.postsData.loading);

  useEffect(() => {
    const loadPosts = async () => {
      dispatch(setLoading(true));
      try {
        const postsData = await fetchPosts();
        dispatch(setPosts(postsData));
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    loadPosts();
  }, [dispatch]);

  async function handleAddPost() {
    const newPost = {
      title: 'Test Post',
      body: 'Content Dummy',
      userId: 1,
    };

    try {
      const response = await createPost(newPost);
      dispatch(addPost(response));
      alert('Post successfully created!');
    } catch (exception) {
      console.log(exception);
    }
  }

}
