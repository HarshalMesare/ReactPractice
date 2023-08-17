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
import axios from 'axios';
import postImage from '../../../assests/images/h.m.png'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = () => {
    setPosts([...posts, formData]);
    handleClose();
  };

  useEffect(() => {
    loadPosts();
  }, []);

  async function loadPosts() {
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (response.status === 200) {
          setPosts(response.data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  async function handleAddPost() {
    setLoading(true);
    try {
      const params = {
        title: 'Test Post',
        body: 'Content Dummy',
        userId: 1
      };
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', params);
      if (response.status === 201) {
        alert('Post successfully created!');
        setPosts([...posts, formData]);
        handleClose();
      }
      setLoading(false);

    } catch (exception) {
      console.log(exception);
      setLoading(false);
    }
  }

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
        aria-describedby="alert-dialog-slide-description"
      > 
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
      <div className={styles.postsGrid}>
  {posts.map((post, index) => (
    <div key={index} className={styles.postContainer}>
            <div className={styles.Imageforpost}>
              <img src={postImage} alt='application-logo' className={styles.postImage} />
            </div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Button  className={styles.done} variant="outlined" size="medium">Done</Button>

          </div>
        ))}
      </div>
    </div>
  );
}