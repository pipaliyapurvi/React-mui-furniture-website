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
                <Box className="footer" sx={{ color: '#fff', py: 6, px: 4 }}>
                    <Grid container spacing={4}>
                        {/* Part 1: About */}
                        <Grid item xs={12} sm={6} md={2.4}>
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
                        <Grid item xs={12} sm={6} md={4} sx={{ marginLeft: '90px' }} >
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
                        <Grid item xs={12} sm={6} md={2.4} sx={{ marginLeft: '65px' }}>
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
                        <Grid item xs={12} sm={6} md={2.4} sx={{ marginLeft: '65px' }}>
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

                        <Grid item xs={12} sm={6} md={4} sx={{ marginLeft: '30px' }}>
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

export default PgBlog
