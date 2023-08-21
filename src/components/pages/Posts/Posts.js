// import * as React from 'react';
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Navbar from '../../generics/Navbar/Navbar';
import styles from './posts.module.css'
import { useEffect } from 'react';
// import axios from 'axios';
import postImage from '../../../assests/images/h.m.png'
import { useDispatch, useSelector } from 'react-redux';
import { postsActions } from '../../../redux/slices/postsSlice';
import { CircularProgress } from '@mui/material';
import { fetchPosts , createPost } from '../../../services/postServices';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {

  const dispatch = useDispatch();
  const [isFormVisible, setFormVisibility] = useState(false);
  const { posts, loading } = useSelector((state) => state.postState);
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    userId: '',
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    loadPosts();
  }, []);

  async function loadPosts() {
    dispatch(postsActions.setLoading(true));
    try {
      const data = await fetchPosts(dispatch);
      dispatch(postsActions.setPosts(data));
    } catch (exception) {
      // Handle error
    } finally {
      dispatch(postsActions.setLoading(false));
    }
  }

  async function handleAddPost() {
    dispatch(postsActions.setLoading(true));
    try {
      const postData = {
        title,
        body,
        userId
      };
      await createPost(dispatch, postData);
      const updatedPosts = await fetchPosts(dispatch);
      dispatch(postsActions.setPosts(updatedPosts));
      alert('Post successfully created!');
      setFormVisibility(false);
    } catch (exception) {
      // Handle error
    } finally {
      dispatch(postsActions.setLoading(false));
    }
  }
  // async function handleAddPost() {
  //   dispatch(postsActions.setLoading(true));
  //   try {
  //     const params = {
  //       title: 'Test Post',
  //       body: 'Content Dummy',
  //       userId: 1
  //     };
  //     const response = await axios.post('https://jsonplaceholder.typicode.com/posts', params);
  //     if (response.status === 201) {
  //       alert('Post successfully created!');
  //       dispatch(postsActions.setPosts([...posts, formData]));
  //       handleClose();
  //     }
  //     dispatch(postsActions.setLoading(false));

  //   } catch (exception) {
  //     console.log(exception);
  //     dispatch(postsActions.setLoading(false));
  //   }
  // }
  return (
    <div>
      <Navbar />
      <div className={styles.centerButton}>
        <Button variant="outlined" className={styles.thepostbutton} onClick={handleClickOpen}>
          ADD-POSTS
        </Button>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        <DialogTitle>{"Add Your Post Here:-"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div className={styles.horizontalForm}>
              <input
                type="text"
                name="title"
                placeholder="Add title"
                value={formData.title}
                onChange={handleInputChange}
              /><br />
              <textarea
                name="body"
                placeholder="Add body"
                value={formData.body}
                onChange={handleInputChange}
              /><br />
              <input
                type="text"
                name="userId"
                placeholder="Add user ID"
                value={formData.userId}
                onChange={handleInputChange}
              /><br />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className={`${styles.horizontalForm} ${styles.cancel}`} onClick={handleClose}>
            Cancel
          </Button>
          <Button className={`${styles.horizontalForm} ${styles.submit}`} onClick={handleAddPost}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      {
        loading === true ? (
          <div className={styles.spinnerContainer}>
            <CircularProgress size={'5rem'} disableShrink={true} />
          </div>
        ) : (
          <div className={styles.postsGrid}>
            {
              posts.map((post, index) => (
                <div key={index} className={styles.postContainer}>
                  <div className={styles.Imageforpost}>
                    <img src={postImage} alt='application-logo' className={styles.postImage} />
                  </div>
                  <h1>{post.title}</h1>
                  <p>{post.body}</p>
                  <Button className={styles.done} variant="outlined" size="medium">Done</Button>
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  );
}