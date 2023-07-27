// DialogComponent.jsx
import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import styles from '../../pages/TodoListPage/Table.module.css';

const DialogComponent = ({ open, handleClose, formData, handleChange, handleSubmit }) => {
  console.log('dialog called');
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Add Data Here"}</DialogTitle>
      <div className={styles.formsblocks}>
        <TextField
          className={styles.namebox}
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          name="department"
          label="Department"
          value={formData.department}
          onChange={handleChange}
        />
        <TextField
          name="designation"
          label="Designation"
          value={formData.designation}
          onChange={handleChange}
        />
        <TextField
          name="type"
          label="Employee Type"
          value={formData.type}
          onChange={handleChange}
        />
        <TextField
          name="number"
          label="Contact Number"
          value={formData.number}
          onChange={handleChange}
        />
      </div>
      <DialogActions className={styles.savecancel}>
        <Button onClick={handleClose}>CANCEL</Button>
        <Button onClick={handleSubmit} autoFocus>SAVE</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogComponent;
