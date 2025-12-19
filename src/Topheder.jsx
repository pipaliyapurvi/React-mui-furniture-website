import React from 'react';
import Box from '@mui/material/Box';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typography from '@mui/material/Typography';


function Topheder() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: false
                }
            }
        ]
    };

    return (
        <Box sx={{ backgroundColor: 'black', width: '100%' }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    px: 2,
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                }}
            >
                {/* Left: Social Icons */}
                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }} className="icon">
                    <FacebookIcon />
                    <InstagramIcon />
                    <WhatsAppIcon />
                </Box>

                {/* Center: Slider */}
                <div className="slider">
                    <Slider {...settings}>
                        <div><h5>Free shipping on order over $100!</h5></div>
                        <div><h5>Invite friends and earn rewards!</h5></div>
                        <div><h5>Join our Scheme and earn rewards!</h5></div>
                        <div><h5>Free shipping on order over $100!</h5></div>
                        <div><h5>Invite friends and earn rewards!</h5></div>
                        <div><h5>Join our Scheme and earn rewards!</h5></div>
                    </Slider>
                </div>

                {/* Right: Price Text */}
                <Box sx={{ display: 'flex', alignItems: 'center', color: "white" }} className="rupis">
                    <Typography variant="h6" component="h6">INR,$</Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Topheder;