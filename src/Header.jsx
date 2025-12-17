import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Furniture from './Furniture';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function Header({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {/* <List>
        {['Home', 'Shop', 'Collection', 'Blog', 'Contact'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        </List>
      <Divider /> */}
      <ul className='hed-1' >
        <li >
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop" >Shop</Link>s
        </li>
        <li>
          <Link to="/collection" >Collection</Link>
        </li>
        <li>
          <Link to="/blog" >Blog</Link>
        </li>
        <li>
          <Link to="/contact" >Contact</Link>
        </li>
      </ul>


    </Box>

  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }} className="header">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/* You can place another icon here if needed */}
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="logo">
              <img
                src="https://wdtteapoy.wpengine.com/wp-content/themes/teapoy/assets/images/light-logo.svg"
                alt="Logo"
                height="30"
              />
            </Typography>
            <Box className="hedicon" sx={{ display: 'flex', gap: 2 }}>
              <Box className="icon-1"><SearchIcon /></Box>
              <Box className="icon-2"><PermIdentityIcon /></Box>
              <Box className="icon-3"><ShoppingCartIcon /></Box>
              <Box className="icon-4">
                <MenuIcon
                  onClick={toggleDrawer(true)}
                  style={{ cursor: 'pointer' }}
                />
              </Box>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Drawer Component */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
        >
          {drawerContent}
        </Drawer>
      </Box>
      {children}
    </>
  );
}

export default Header;
