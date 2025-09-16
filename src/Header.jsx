import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';


function Header() {
  return (
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

          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className='logo'>
            <img src="https://wdtteapoy.wpengine.com/wp-content/themes/teapoy/assets/images/light-logo.svg" alt="" />
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
          <Box className="hedicon">
            <SearchIcon></SearchIcon>
            <PermIdentityIcon></PermIdentityIcon>
            <ShoppingCartIcon></ShoppingCartIcon>
            <MenuIcon></MenuIcon>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>


  )
}

export default Header

