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
import Topheder from "./Topheder";
import Footer from "./Footer";

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
            
        <Topheder></Topheder>
            <Header>



                <Box className="pg-1">
                    <img src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/home-hotspot-img-1.jpg" alt="" />
                    <Typography variant='h2'>Shop</Typography>
                    <Typography className="subtitle1">
                        <a href="/">HOME</a> / SHOP
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
               <Footer></Footer>

            </Header>

        </>
    )
}

export default PgShop
