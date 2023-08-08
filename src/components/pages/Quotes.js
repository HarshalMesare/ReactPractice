import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Navbar from '../generics/Navbar/Navbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import styles from '../../components/pages/Quotes.module.css';
import { DialogContent } from '@mui/material';

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const [quote, setQuote] = React.useState('');
  const [name, setName] = React.useState('');
  const [timestamp, setTimestamp] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [type, setType] = React.useState('');
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
   
  const handleDeleteQuote = () => {
    setOpen(false);
  };
  return (
    <div>
    <Navbar />
    <Button className={styles.boxvox} variant="outlined" onClick={handleClickOpen}>
      Add-QUOTES
    </Button>
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle className={styles.openbox} id="responsive-dialog-title">
        Add your quote here:
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
        <input
          type="text"
          placeholder="Timestamp:-"
          value={timestamp}
          onChange={(e) => setTimestamp(e.target.value)}
        />
        <input
          type="text"
          placeholder="Country:-"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          type="text"
          placeholder="Type:-"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </DialogContent>
      <DialogActions className={styles.dialogActions}>
        <Button onClick={handleClose} autoFocus>
          Disagree
        </Button>
        <Button onClick={handleDeleteQuote} autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  </div>
  );
}