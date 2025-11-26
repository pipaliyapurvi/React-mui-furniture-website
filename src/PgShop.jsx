import Slider from "react-slick";
import { Box, Grid, Typography, Link } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Header from "./Header";

function PgShop() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    }




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
                    <Typography variant='h2'>Shop</Typography>
                    <Typography className="subtitle1">
                        <a href="/">HOME</a> / SHPO
                    </Typography>


                </Box>
                <div className="ecommers " style={{ backgroundColor: '#2B2B2B', width: '100%', height: '470px' }}>
                    <Slider {...settings}>
                        <Typography className='product'>
                            <div className='product-img' >
                                <img class='main-img' src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-2-01.jpg" alt="" />
                                <img class="hover-img" src="	https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-2-02.jpg" alt="" />

                            </div>
                            <Typography className='section'>
                                <Typography variant="h6">HOME DECORATION</Typography>
                                <Typography variant="h4">Modern Ceramic Lamp</Typography>
                                <Typography variant="h5">₹&nbsp;51.70 - ₹&nbsp;58.50 </Typography>
                            </Typography>
                        </Typography>
                        <Typography className='product-1'>
                            <div className='product-img1'>
                                <img class='main-img-1' src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-1-04.jpg" alt="" />
                                <img class="hover-img-1" src="	https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-1-05.jpg" alt="" />
                            </div>
                            <Typography className='section'>
                                <Typography variant="h6">HOME DECORATION</Typography>
                                <Typography variant="h4">Soft Seater Chair</Typography>
                                <Typography variant="h5">₹&nbsp;108.95 - ₹&nbsp;123.50 </Typography>
                            </Typography>

                        </Typography>
                        <Typography className='product-2'>
                            <div className='product-img2'>
                                <img class='main-img-2' src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-7-05.jpg" alt="" />
                                <img class="hover-img-2" src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-7-04.jpg" alt="" />
                            </div>
                            <Typography className='section'>
                                <Typography variant="h6">HOME DECORATION </Typography>
                                <Typography variant="h4">Elegant Wooden Table</Typography>
                                <Typography variant="h5">₹&nbsp;88.20 - ₹&nbsp;146.40 </Typography>
                            </Typography>
                        </Typography>
                        <Typography className='product-2'>
                            <div className='product-img2'>
                                <img class='main-img-2' src="	https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-4-01.jpg" alt="" />
                                <img class="hover-img-2" src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-4-02.jpg" alt="" />
                            </div>
                            <Typography className='section'>
                                <Typography variant="h6">HOME DECORATION </Typography>
                                <Typography variant="h4">Round Wood Table</Typography>
                                <Typography variant="h5">₹&nbsp;119.10 - ₹&nbsp;123.75 </Typography>
                            </Typography>
                        </Typography>
                    </Slider>
                </div>

                <div className="ecommers " style={{ backgroundColor: '#2B2B2B', width: '100%', height: '470px' }}>
                    <Slider {...settings}>

                        <Typography className='product-2'>
                            <div className='product-img2'>
                                <img class='main-img-2' src="	https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-3-02.jpg" alt="" />
                                <img class="hover-img-2" src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/02/shop-3-03.jpg" alt="" />
                            </div>
                            <Typography className='section'>
                                <Typography variant="h6">HOME DECORATION </Typography>
                                <Typography variant="h4">Ceramic Art Set</Typography>
                                <Typography variant="h5">₹&nbsp;25.40  - ₹&nbsp;26.15 </Typography>
                            </Typography>
                        </Typography>
                        <Typography className='product-2'>
                            <div className='product-img2'>
                                <img class='main-img-2' src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-11-01.jpg" alt="" />
                                <img class="hover-img-2" src="	https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-11-04.jpg" alt="" />
                            </div>
                            <Typography className='section'>
                                <Typography variant="h6">HOME DECORATION </Typography>
                                <Typography variant="h4">Copper Tea Jug Set</Typography>
                                <Typography variant="h5">₹&nbsp;32.20  - ₹&nbsp;56.15</Typography>
                            </Typography>
                        </Typography>
                        <Typography className='product-2'>
                            <div className='product-img2'>
                                <img class='main-img-2' src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-11-04.jpg" alt="" />
                                <img class="hover-img-2" src="	https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-11-03.jpg" alt="" />
                            </div>
                            <Typography className='section'>
                                <Typography variant="h6">HOME DECORATION </Typography>
                                <Typography variant="h4">Steel Pot Jug</Typography>
                                <Typography variant="h5">₹&nbsp;33.15 - ₹&nbsp;52.40 </Typography>
                            </Typography>
                        </Typography>
                        <Typography className='product-2'>
                            <div className='product-img2'>
                                <img class='main-img-2' src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/02/shop-1-02.jpg" alt="" />
                                <img class="hover-img-2" src="	https://wdtteapoy.wpengine.com/wp-content/uploads/2024/02/shop-1-01.jpg" alt="" />
                            </div>
                            <Typography className='section'>
                                <Typography variant="h6">HOME DECORATION </Typography>
                                <Typography variant="h4">Bamboo Sofa</Typography>
                                <Typography variant="h5">₹&nbsp;27.05  </Typography>
                            </Typography>
                        </Typography>

                    </Slider>
                </div >
                <div className="ecommers " style={{ backgroundColor: '#2B2B2B', width: '100%', height: '440px' }}>
                    <Slider {...settings}>
                        <Typography className='product'>
                            <div className='product-img' >
                                <img class='main-img' src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-8-02.jpg" alt="" />
                                <img class="hover-img" src="	https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-8-01-1.jpg" alt="" />

                            </div>
                            <Typography className='section'>
                                <Typography variant="h6">OFFICE DECORATION</Typography>
                                <Typography variant="h4">Single Seater Sofa Chair</Typography>
                                <Typography variant="h5">₹&nbsp;212.10 - ₹&nbsp;215.20 </Typography>
                            </Typography>
                        </Typography>
                        <Typography className='product-1'>
                            <div className='product-img1'>
                                <img class='main-img-1' src="	https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-6-01.jpg" alt="" />
                                <img class="hover-img-1" src="	https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-6-02.jpg" alt="" />
                            </div>
                            <Typography className='section'>
                                <Typography variant="h6">OFFICE DECORATION</Typography>
                                <Typography variant="h4">Handmade Floral Vase</Typography>
                                <Typography variant="h5">₹&nbsp;16.65 - ₹&nbsp;17.80 </Typography>
                            </Typography>

                        </Typography>
                        <Typography className='product-2'>
                            <div className='product-img2'>
                                <img class='main-img-2' src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-5-05.jpg" alt="" />
                                <img class="hover-img-2" src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-5-01.jpg" alt="" />
                            </div>
                            <Typography className='section'>
                                <Typography variant="h6">OFFICE DECORATION</Typography>
                                <Typography variant="h4">Creative Bonsai Plant</Typography>
                                <Typography variant="h5">₹&nbsp;11.10 - ₹&nbsp;11.50 </Typography>
                            </Typography>
                        </Typography>
                        <Typography className='product-1'>
                            <div className='product-img1'>
                                <img class='main-img-1' src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-10-03.jpg" alt="" />
                                <img class="hover-img-1" src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-10-04.jpg" alt="" />
                            </div>
                            <Typography className='section'>
                                <Typography variant="h6">OFFICE DECORATION</Typography>
                                <Typography variant="h4">Foam Cooling Pillow</Typography>
                                <Typography variant="h5">₹&nbsp;65.30 - ₹&nbsp;65.85 </Typography>
                            </Typography>

                        </Typography>
                    </Slider>
                </div>
                <div className="ecommers " style={{ backgroundColor: '#2B2B2B', width: '100%', height: '440px' }}>
                    <Slider {...settings}>

                        <Typography className='product-1'>
                            <div className='product-img1'>
                                <img class='main-img-1' src="	https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-9-05.jpg" alt="" />
                                <img class="hover-img-1" src="	https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-9-03.jpg" alt="" />
                            </div>
                            <Typography className='section'>
                                <Typography variant="h6">OFFICE DECORATION</Typography>
                                <Typography variant="h4">Living Room Sofa</Typography>
                                <Typography variant="h5">₹&nbsp; 141.90 - ₹&nbsp;142.70 </Typography>
                            </Typography>

                        </Typography>
                        <Typography className='product-1'>
                            <div className='product-img1'>
                                <img class='main-img-1' src="	https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-8-04.jpg" alt="" />
                                <img class="hover-img-1" src="		https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-8-03.jpg" alt="" />
                            </div>
                            <Typography className='section'>
                                <Typography variant="h6">OFFICE DECORATION</Typography>
                                <Typography variant="h4">Wooden Sofa Chair</Typography>
                                <Typography variant="h5">₹&nbsp;223.50 - ₹&nbsp;225.40 </Typography>
                            </Typography>

                        </Typography>
                        <Typography className='product-1'>
                            <div className='product-img1'>
                                <img class='main-img-1' src="	https://wdtteapoy.wpengine.com/wp-content/uploads/2024/02/shop-12-01.jpg" alt="" />
                                <img class="hover-img-1" src="	https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-12-02.jpg" alt="" />
                            </div>
                            <Typography className='section'>
                                <Typography variant="h6">OFFICE DECORATION</Typography>
                                <Typography variant="h4">Adjustable Single Sofa</Typography>
                                <Typography variant="h5">₹&nbsp;168.85 - ₹&nbsp;172.10 </Typography>
                            </Typography>

                        </Typography>
                        <Typography className='product-1'>
                            <div className='product-img1'>
                                <img class='main-img-1' src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/02/shop-3-03.jpg" alt="" />
                                <img class="hover-img-1" src="	https://wdtteapoy.wpengine.com/wp-content/uploads/2024/02/shop-3-01.jpg" alt="" />
                            </div>
                            <Typography className='section'>
                                <Typography variant="h6">OFFICE DECORATION</Typography>
                                <Typography variant="h4">Stone Decor Set</Typography>
                                <Typography variant="h5">₹&nbsp;62.35 - ₹&nbsp; 63.80</Typography>
                            </Typography>

                        </Typography>



                    </Slider>
                </div>
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

export default PgShop
