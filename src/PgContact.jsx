import { Box, Grid, Typography, TextField, Button, Link } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Header from './Header';
import Topheder from './Topheder';
import Footer from './Footer';

function PgContact() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };


  return (
    <>
       <Topheder></Topheder>
      <Header>
        <Box className="pg-1">
          <img
            src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/home-hotspot-img-1.jpg"
            alt=""
          />
          <Typography variant="h2" align="center" >
            Contact Us
          </Typography>
          <Typography className="subtitle1" align="center">
            <a href="/">HOME</a> / CONTACT US
          </Typography>
        </Box>
        <Box className="contact" >
          <Typography variant="h6">DROP US A LINE</Typography>
          <Typography variant="h2">Round-the-clock Service</Typography>
          <Typography variant="h5">
            Sed id semper risus in hendrerit gravida rutrum quisque. Vitae proin
            sagittis nisl <br />
            Vel elit scelerisque mauris rhoncus mattis rhoncus urna.
          </Typography>

          {/* Contact Form */}
          <Box
            sx={{
              mt: 5,
              width: '60%',
              mx: 'auto',
              backgroundColor: 'rgba(255,255,255,0.05)',
              p: 4,
              borderRadius: 2,
            }}
          >
            <Grid container spacing={2}>
              {[
                { label: 'Name' },
                { label: 'Mobile Number' },
                { label: 'Email ID', fullWidth: true },
              ].map((field, index) => (
                <Grid item xs={12} sm={field.fullWidth ? 12 : 6} key={index}>
                  <TextField
                    fullWidth
                    label={field.label}
                    variant="outlined"
                    InputLabelProps={{ style: { color: '#ccc' } }}
                    sx={{
                      input: { color: 'white' },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: 'black' },
                        '&:hover fieldset': { borderColor: '#b85c0c' },
                        '&.Mui-focused fieldset': { borderColor: '#b85c0c' },
                      },
                    }}
                  />
                </Grid>
              ))}

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Additional Information"
                  variant="outlined"
                  InputLabelProps={{ style: { color: '#ccc' } }}
                  sx={{
                    textarea: { color: 'white' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'black' },
                      '&:hover fieldset': { borderColor: '#b85c0c' },
                      '&.Mui-focused fieldset': { borderColor: '#b85c0c' },
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} sx={{ textAlign: 'center', marginLeft: '370px' }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#DD7210',
                    color: 'white',
                    '&:hover': { backgroundColor: '#b85c0c' },
                    px: 5,
                    mt: 2,
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
     <Footer></Footer>
      </Header>
    </>
  );
}

export default PgContact;
