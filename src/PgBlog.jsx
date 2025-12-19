import Slider from "react-slick";
import Button from "@mui/material/Button";
import { Box, Grid, Typography, Link } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Header from "./Header";
import Topheder from "./Topheder";
import Footer from "./Footer";

function PgBlog() {
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
                    <img src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/home-hotspot-img-1.jpg" alt="" />
                    <Typography variant='h2'>Blog</Typography>
                    <Typography className="subtitle1">
                        <a href="/">HOME</a> / BLOG
                    </Typography>


                </Box>
                <Box className="sectionn" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', py: 4 }}>
                    <Box sx={{ width: '100%' }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            {/* Image with overlay text */}
                            <Grid size={6}>
                                <Box sx={{ position: 'relative', width: '100%' }}>
                                    <img
                                        src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-3-Section-3.jpg"
                                        alt="Section visual"
                                        style={{ width: '100%', display: 'block' }}
                                    />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: "385px",
                                            left: '85px',
                                            width: '74%',
                                            height: '25%',
                                            backgroundColor: 'rgba(0, 0, 0, 0.4)', // semi-transparent overlay
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#fff',
                                            p: 2,
                                            textAlign: 'center',

                                        }}
                                    >
                                        <Typography variant="h5" >
                                            "Cras dignissim metus nibh, et viverra. Ets tristique tortor vel finibus tristique. Nullam eget lobortis diam, in lacinia odio."
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid size={6} className="grid-2">
                                <Typography variant="h6">BUDGET FRIENDLY</Typography>
                                <Typography variant="h2">Unbeatable Selections &AMS; Unmatched Quality</Typography>
                                <Typography variant="h5">Yorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
                                <Box className="number">
                                    <Typography variant="h1" >10K+</Typography>
                                    <Typography variant="h1" >35</Typography>
                                    <Typography variant="h1" >450</Typography>
                                </Box>
                                <Box className="number-1">
                                    <Typography variant="h5" >Products Sold</Typography>
                                    <Typography variant="h5" >Years Service</Typography>
                                    <Typography variant="h5" >Outlets Worldwide</Typography>
                                </Box>
                                <Button className="bbtn">Learn more</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box >
           <Footer></Footer>
            </Header>
        </>
    )
}

export default PgBlog
