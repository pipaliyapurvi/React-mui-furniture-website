import { Box, Grid, Typography, Link } from '@mui/material';
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
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Header from './Header';
import Topheder from './Topheder';
import Footer from './Footer';

function PgCollection() {
    const [hoveredCategory, setHoveredCategory] = useState(null);

    const defaultImage = "https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-3-Category-01.jpg";
    const images = {
        bedroom: "https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-3-Category-02.jpg",
        office: "https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-3-Category-03.jpg",
        dining: "https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-3-Category-04.jpg",
        kitchen: "https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-3-Category-05.jpg",
        furniture: "https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-3-Category-06.jpg",
    };
    const settings = {
        dots: false,
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
                    <Typography variant='h2'>Collection</Typography>
                    <Typography className="subtitle1">
                        <a href="/">HOME</a> / COLLECTION
                    </Typography>
                </Box>
                <Box className="shop" sx={{ padding: 4 }}>
                    <Typography variant="h6">ONE-STOP SHOP</Typography>
                    <Typography variant="h2" gutterBottom>Shop By Category</Typography>

                    <Grid container spacing={6} alignItems="flex-start">
                        {/* Text Column */}
                        <Grid item xs={12} md={6}>
                            <Typography className='border'> </Typography>
                            <Typography variant="h4">01 Living Room</Typography>
                            <Typography className='border'> </Typography>
                            <Typography
                                variant="h4"
                                onMouseEnter={() => setHoveredCategory('bedroom')}
                                onMouseLeave={() => setHoveredCategory(null)}
                                sx={{ cursor: 'pointer' }}
                            >
                                02 BedRoom
                            </Typography>
                            <Typography className='border'> </Typography>
                            <Typography
                                variant="h4"
                                onMouseEnter={() => setHoveredCategory('office')}
                                onMouseLeave={() => setHoveredCategory(null)}
                                sx={{ cursor: 'pointer' }}
                            >
                                03 Home Office
                            </Typography>
                            <Typography className='border'> </Typography>
                            <Typography
                                variant="h4"
                                onMouseEnter={() => setHoveredCategory('dining')}
                                onMouseLeave={() => setHoveredCategory(null)}
                                sx={{ cursor: 'pointer' }}
                            >
                                04 Dining Room
                            </Typography>
                            <Typography className='border'> </Typography>
                            <Typography
                                variant="h4"
                                onMouseEnter={() => setHoveredCategory('kitchen')}
                                onMouseLeave={() => setHoveredCategory(null)}
                                sx={{ cursor: 'pointer' }}
                            >
                                05 Kitchen Room
                            </Typography>
                            <Typography className='border'> </Typography>
                            <Typography
                                variant="h4"
                                onMouseEnter={() => setHoveredCategory('furniture')}
                                onMouseLeave={() => setHoveredCategory(null)}
                                sx={{ cursor: 'pointer' }}
                            >
                                06 Balcony Furniture

                            </Typography>
                            <Typography className='border'> </Typography>
                        </Grid>

                        {/* Image Column */}
                        <Grid item xs={12} md={6}>
                            <Box sx={{ pl: { md: 4 }, pt: { xs: 4, md: 0 } }}>
                                <img
                                    src={hoveredCategory ? images[hoveredCategory] : defaultImage}
                                    alt="Category"
                                    style={{ width: '100%', height: '495px', objectFit: 'cover', borderRadius: 8 }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
               <Box sx={{ width: '100%' }} className="hoverimg">
                               <Grid container spacing={0}>
                                   <Grid item xs={12} sm={6} md={3} className="img-container">
                                       <img src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Brand-Logo-BG-Images-01.jpg" alt="Brown Donkey" />
                                       <Box className="hover-text">
                                           <Typography variant="h6" sx={{ 
                                               color: 'white', 
                                               fontWeight: 700,
                                               textAlign: 'center',
                                               margin: 0
                                           }}>
                                               Brown Donkey
                                           </Typography>
                                       </Box>
                                   </Grid>
                                   <Grid item xs={12} sm={6} md={3} className="img-container">
                                       <img src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Brand-Logo-BG-Images-02.jpg" alt="Baletic" />
                                       <Box className="hover-text">
                                           <Typography variant="h6" sx={{ 
                                               color: 'white', 
                                               fontWeight: 700,
                                               textAlign: 'center',
                                               margin: 0
                                           }}>
                                               Baletic
                                           </Typography>
                                       </Box>
                                   </Grid>
                                   <Grid item xs={12} sm={6} md={3} className="img-container">
                                       <img src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Brand-Logo-BG-Images-03.jpg" alt="Maskan" />
                                       <Box className="hover-text">
                                           <Typography variant="h6" sx={{ 
                                               color: 'white', 
                                               fontWeight: 700,
                                               textAlign: 'center',
                                               margin: 0
                                           }}>
                                               Maskan
                                           </Typography>
                                       </Box>
                                   </Grid>
                                   <Grid item xs={12} sm={6} md={3} className="img-container">
                                       <img src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Brand-Logo-BG-Images-05.jpg" alt="Saltwater" />
                                       <Box className="hover-text">
                                           <Typography variant="h6" sx={{ 
                                               color: 'white', 
                                               fontWeight: 700,
                                               textAlign: 'center',
                                               margin: 0
                                           }}>
                                               Saltwater
                                           </Typography>
                                       </Box>
                                   </Grid>
                               </Grid>
                           </Box>
              <Footer></Footer>
            </Header>


        </>
    )
}

export default PgCollection
