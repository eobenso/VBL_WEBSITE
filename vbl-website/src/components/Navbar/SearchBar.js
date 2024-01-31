import React from 'react';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import './SearchBar.css'; 

function SearchBar() {
  const openLibraryCat = () => {
    const libraryCatURL = 'https://www.librarycat.org/lib/VanBlackLibrary';
    window.open(libraryCatURL, '_blank');
  };

  return (
    <Fab variant="extended" onClick={openLibraryCat} sx={{width: 800, margin: 5,}}>
      <NavigationIcon sx={{ mr: 1 }} />
      Discover Book Reads Here
    </Fab>
  );
}

export default SearchBar;
