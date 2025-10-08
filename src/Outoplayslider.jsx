import React from 'react'
import Slider from "react-slick";
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';





function Outoplayslider() {
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
            <Box className="sliderr">
                <div className="slider-container">
                    <Slider {...settings} className='texss'>
                        <div>
                            <Typography variant="h6">Comfort And High Functionality.</Typography>
                        </div>

                        <div>
                            <Typography variant="h6">Tailored Furniture For Specific.</Typography>
                        </div>
                        <div>
                            <Typography variant="h6">Ensure Durability And Longevity.</Typography>
                        </div>
                        <div>
                            <Typography variant="h6">Diverse Range Of Furniture's.</Typography>
                        </div>
                    </Slider>
                </div>
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
        </>
    )
}

export default Outoplayslider
