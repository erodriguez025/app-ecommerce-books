import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
import ebook from './ebook.png'
import CartWidget from './CartWidget/CartWidget';

export default function Nav() {
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor: "#112B3C"}}>
        <Toolbar>
          <Link className="navbar-brand" to="/">
					  <img 
              src={ebook}
              alt='Comerce.js'
              height='50px'
					   />
		      </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className="navbar-brand" to="/">
			        e-Books
			      </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/category/autobiografias" className="nav-link">
							Autobiografías
						</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/category/vidadesantos" className="nav-link">
							Vida de santos
						</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/category/novelas" className="nav-link">
							Novelas
						</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/category/apologetica" className="nav-link">
							Apologética
						</Link>
          </Typography>
          <Button color="inherit">Login</Button>
          <CartWidget/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
