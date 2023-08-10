import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Navbar from '../../generics/Navbar/Navbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import styles from './Quotes.module.css'
import { DialogContent } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const [quote, setQuote] = React.useState('');
  const [name, setName] = React.useState('');
  const [timestamp, setTimestamp] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [type, setType] = React.useState('');
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [savedData, setSavedData ] = React.useState([]);
  const [editIndex, setEditIndex] = React.useState(-1);
  const [deleteIndex, setDeleteIndex] = React.useState(-1);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteQuote = () => {
    setOpen(false);
  };

  const handleSaveQuote = () => {
    const newQuoteData = {
      quote: quote,
      name: name,
      timestamp: timestamp,
      country: country,
      type: type,
    };
    setSavedData([...savedData, newQuoteData]);

    setQuote('');
    setName('');
    setTimestamp('');
    setCountry('');
    setType('');

    setOpen(false);
  };

  const handleEdit = (index) => {
    const editedQuote = savedData[index];
    setQuote(editedQuote.quote);
    setName(editedQuote.name);
    setCountry(editedQuote.country);
    setType(editedQuote.type);
    setEditIndex(index);
    setOpen(true); 
  };

  const handleDelete = (index) => {
    setDeleteIndex(index);
  };

  const confirmDelete = () => {
    const updatedData = savedData.filter((_, index) => index !== deleteIndex);
    setSavedData(updatedData);
    setDeleteIndex(-1);
  };

  return (
    <div>
      <Navbar />
      <div className={styles.addButtonContainer}>
        <Button className={`${styles.boxvox} ${styles.addButton}`} variant="outlined" onClick={handleClickOpen}>
          ADD-QUOTES
        </Button>
      </div>
      <Dialog
        open={open}
        maxWidth={"sm"}
        fullWidth={true}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle className={styles.openbox} id="responsive-dialog-title">
        {editIndex === -1 ? 'Add your quote here:' : 'Edit your quote:'}
        </DialogTitle>
        <DialogContent className={styles.dialogContent}>
          <input
            type="text"
            placeholder="Quote:-"
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
          />
          <input
            type="text"
            placeholder="Name:-"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* <input
            type="text"
            placeholder="Timestamp:-"
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
          /> */}
        
           <FormControl>
            <InputLabel>Country:</InputLabel>
            <Select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <MenuItem value="INDIA">INDIA</MenuItem>
              <MenuItem value="UK">UK</MenuItem>
              <MenuItem value="USA">USA</MenuItem>
              <MenuItem value="NK">NK</MenuItem>
              <MenuItem value="Canada">Canada</MenuItem>
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel>Type:</InputLabel>
            <Select
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value="Inspiration">Inspiration</MenuItem>
              <MenuItem value="Wisdom">Wisdom</MenuItem>
              <MenuItem value="Humor">Humor</MenuItem>
            </Select>
          </FormControl>

          <DialogActions className={styles.dialogActions}>
            <Button onClick={handleClose} variant="outlined" autoFocus>
              Cancel
            </Button>
            <Button onClick={handleSaveQuote} variant="outlined" autoFocus>
              Save
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>

      <div className={styles.savedQuotes}>
      {savedData.map((quoteData, index) => (
          <div key={index} className={styles.savedQuote}>
            <p className={styles.quoteText}>{quoteData.quote}</p>
            <p className={styles.detailText}>{quoteData.name}</p>
            <p className={styles.detailText}>{quoteData.country}</p>
            <p className={styles.detailText}>{quoteData.type}</p>
            <div className={styles.actions}>
              <button onClick={() => handleEdit(index)}>
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button onClick={() => handleDelete(index)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        ))}


          {deleteIndex !== -1 && (
          <div className={styles.deleteConfirmation}>
            <p>Are you sure you want to delete this quote?</p>
            <button className={styles.confirmButton} onClick={confirmDelete}>
              Yes
            </button>
            <button className={styles.cancelButton} onClick={() => setDeleteIndex(-1)}>
              No
            </button>
          </div>
        )}

        </div> 
    
  </div>
  );
}
