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
            <Box sx={{ backgroundColor: 'black' }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    px: 2
                }}>
                    {/* Left: Social Icons */}

                    <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }} className="icon">
                        <FacebookIcon />
                        <InstagramIcon />
                        <WhatsAppIcon />
                    </Box>

                    {/* Center: Sliding Text */}
                    <div className="slider" >
                        <Slider {...settings}>
                            <div>
                                <h5>Free shipping on order over $100!</h5>
                            </div>
                            <div>
                                <h5>Invite friends and earn rewards!</h5>
                            </div>
                            <div>
                                <h5>Join our Scheme and earn rewards!</h5>
                            </div>
                            <div>
                                <h5>Free shipping on order over $100!</h5>
                            </div>
                            <div>
                                <h5>Invite friends and earn rewards!</h5>
                            </div>
                            <div>
                                <h5>Join our Scheme and earn rewards!</h5>
                            </div>
                        </Slider>
                    </div>

                    {/* Right:   Price Tag Icon */}
                    <Box sx={{ display: 'flex', alignItems: 'center', color: "white" }} className="rupis">
                        <Typography variant="h6" component="h6">INR,$</Typography>
                    </Box>
                </Box>
            </Box>
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
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 0.5 }}>
                        <Grid size={3} className="img-container">
                            <img src="	https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Brand-Logo-BG-Images-01.jpg" alt="" />
                            <Box className="hover-text">Brown Donkey</Box>
                        </Grid>
                        <Grid size={3} className="img-container">
                            <img src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Brand-Logo-BG-Images-02.jpg" alt="" />
                            <Box className="hover-text">Baletic</Box>
                        </Grid>
                        <Grid size={3} className="img-container">
                            <img src="	https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Brand-Logo-BG-Images-03.jpg" alt="" />
                            <Box className="hover-text">Maskan</Box>
                        </Grid>
                        <Grid size={3} className="img-container">
                            <img src="	https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Brand-Logo-BG-Images-05.jpg" alt="" />
                            <Box className="hover-text">Saltwater</Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box className="footer" sx={{ color: '#fff', py: 6, px: 4 }}>
            <Grid container spacing={4}>
                {/* Part 1: About */}
                <Grid item xs={12} sm={6} md={2}>
                    <img src="	https://wdtteapoy.wpengine.com/wp-content/themes/teapoy/assets/images/light-logo.svg" alt="" />

                    <Typography variant="h6" sx={{ fontFamily: 'serif' }}>
                        Proin a interdum elit. Etiam eu sapien sem.<br /> Suspendisse a massa justo. Cras eget lorem<br /> nunc. Fusce nec urna tempus tempus.
                    </Typography>
                    <Box className="footericon" sx={{ display: 'flex', marginTop: '30px', gap: '15px' }}>
                        <Box className="footericon-1"><WhatsAppIcon /></Box>
                        <Box className="footericon-2"><InstagramIcon /></Box>
                        <Box className="footericon-3"><FacebookIcon /></Box>
                        <Box className="footericon-4"><YouTubeIcon /></Box>
                        <Box className="footericon-5"><XIcon /></Box>


                    </Box>
                </Grid>

                {/* Part 2: Useful Links */}
                <Grid item xs={12} sm={6} md={4} sx={{ marginLeft: '25px' }} >
                    <Typography variant="h6" gutterBottom sx={{ fontFamily: 'serif' }}>
                        Useful Links
                    </Typography>
                    <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', paddingBottom: '5px', paddingTop: '10px' }}>History</Link>
                    <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', paddingBottom: '5px', paddingTop: '10px' }}>Our Team</Link>
                    <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', paddingBottom: '5px', paddingTop: '10px' }}>Privacy Policy</Link>
                    <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', paddingBottom: '5px', paddingTop: '10px' }}>Services Offered</Link>
                    <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', paddingBottom: '5px', paddingTop: '10px' }}>Product Catalog</Link>
                </Grid>
                {/* Part 3: Information */}
                <Grid item xs={12} sm={6} md={2.4} sx={{ marginLeft: '25px' }}>
                    <Typography variant="h6" gutterBottom sx={{ fontFamily: 'serif' }}>
                        Information
                    </Typography>
                    <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', paddingBottom: '5px', paddingTop: '10px' }}>FAQ / Return</Link>
                    <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', paddingBottom: '5px', paddingTop: '10px' }}>Privacy / Terms</Link>
                    <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', paddingBottom: '5px', paddingTop: '10px' }}>Affiliate</Link>
                    <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', paddingBottom: '5px', paddingTop: '10px' }}>Sizing Guide</Link>
                    <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', paddingBottom: '5px', paddingTop: '10px' }}>Accessibility</Link>
                </Grid>
                {/* Part 4: Support */}
                <Grid item xs={12} sm={6} md={2.4} sx={{ marginLeft: '25px' }}>
                    <Typography variant="h6" gutterBottom sx={{ fontFamily: 'serif' }}>
                        Support
                    </Typography>
                    <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', paddingBottom: '5px', paddingTop: '10px' }}>Your Account</Link>
                    <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', paddingBottom: '5px', paddingTop: '10px' }}>Press Release</Link>
                    <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', paddingBottom: '5px', paddingTop: '10px' }}>Return Centre</Link>
                    <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', paddingBottom: '5px', paddingTop: '10px' }}>App Download</Link>
                    <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none', paddingBottom: '5px', paddingTop: '10px' }}>Advertisements</Link>
                </Grid>
                {/* Part 5: Social Media */}
                <Grid item xs={12} sm={6} md={4} >
                    <Typography variant="h6" gutterBottom sx={{ fontFamily: 'serif' }}>
                        Follow Us @Instagram
                    </Typography>

                    <Box
                        className="footerimg"
                        sx={{
                            display: 'flex',
                            gap: 1,
                            mt: 1,
                        }}
                    >
                        <img
                            src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Instagram-01.jpg"
                            alt="Instagram 1"
                            style={{ width: '100%', maxWidth: '100px', height: 'auto', borderRadius: '10px' }}
                        />
                        <img
                            src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Instagram-02.jpg"
                            alt="Instagram 2"
                            style={{ width: '100%', maxWidth: '100px', height: 'auto', borderRadius: '10px' }}
                        />
                        <img
                            src="	https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Instagram-03.jpg"
                            alt="Instagram 3"
                            style={{ width: '100%', maxWidth: '100px', height: 'auto', borderRadius: '10px' }}
                        />
                    </Box>
                    <Box
                        className="footerimg"
                        sx={{
                            display: 'flex',
                            gap: 1,
                            mt: 1,
                        }}
                    >
                        <img
                            src="	https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Instagram-04.jpg"
                            alt="Instagram 1"
                            style={{ width: '100%', maxWidth: '100px', height: 'auto', borderRadius: '10px' }}
                        />
                        <img
                            src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Instagram-05.jpg"
                            alt="Instagram 2"
                            style={{ width: '100%', maxWidth: '100px', height: 'auto', borderRadius: '10px' }}
                        />
                        <img
                            src="	https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Instagram-06.jpg"
                            alt="Instagram 3"
                            style={{ width: '100%', maxWidth: '100px', height: 'auto', borderRadius: '10px' }}
                        />
                    </Box>
                </Grid>

            </Grid>
        </Box>
            </Header>


        </>
    )
}

export default PgCollection
