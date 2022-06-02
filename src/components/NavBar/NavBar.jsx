import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ebook from './ebook.png'
import CartWidget from './CartWidget/CartWidget';


export default function NavBar() {


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{backgroundColor: "#06113C"}}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <img 
                src={ebook}
                alt='Comerce.js'
                height='50px'
            />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            eBooks
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hello guest
          </Typography>
          <Button variant="outlined">
            <strong>Sign In</strong>
          </Button>
          <CartWidget/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
