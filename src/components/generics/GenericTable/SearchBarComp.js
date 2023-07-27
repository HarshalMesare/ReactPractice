// SearchBarComponent.jsx
import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styles from '../../pages/TodoListPage/Table.module.css';

const SearchBarComponent = ({ searchQuery, setSearchQuery, handleExcelDownload, handleClickOpen }) => {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchInputContainer}>
        <TextField
          className={styles.searchInput}
          placeholder="Search Here"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <Button className={styles.excelButton} variant="outlined" onClick={handleExcelDownload}>
        Download Excel
      </Button>
      <Button className={styles.wholeform} variant="outlined" onClick={handleClickOpen}>
        Add-Details
      </Button>
    </div>
  );
};

 export default SearchBarComponent;