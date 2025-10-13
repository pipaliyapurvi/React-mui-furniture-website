import React from 'react'
import Box from '@mui/material/Box';
import Slider from "react-slick";
import Typography from '@mui/material/Typography'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function Customers() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <Box className="customer">
                <Slider {...settings}>
                    <div className='slider-1'>
                        <Typography variant="h6">TESTIMONIAL TIME</Typography>
                        <Typography variant="h2">Our Customers Speak</Typography>
                        <Box className='star'>
                            <StarIcon></StarIcon>
                            <StarIcon></StarIcon>
                            <StarIcon></StarIcon>
                            <StarIcon></StarIcon>
                            <StarBorderIcon></StarBorderIcon>
                        </Box>
                        <Typography variant="h5">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris <br />nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <br />reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla<br /> pariatur. Excepteur sint occaecat cupidatat non proident irure dolor <br />in reprehende.</Typography>
                        <img src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/testimonial-img-01.jpg" alt="" />
                        <Typography variant="h4">Andria Gora </Typography>
                        <Typography variant="h6" className='endtexs'>America  </Typography>
                    </div>
                    <div className='slider-1'>
                        <Typography variant="h6">TESTIMONIAL TIME</Typography>
                        <Typography variant="h2">Our Customers Speak</Typography>
                        <Box className='star'>
                            <StarIcon></StarIcon>
                            <StarIcon></StarIcon>
                            <StarIcon></StarIcon>
                            <StarIcon></StarIcon>
                            <StarBorderIcon></StarBorderIcon>
                        </Box>
                        <Typography variant="h5">Mauris pharetra et ultrices neque ornare aenean euismod elementum<br /> nisi. Malesuada fames ac turpis egestas sed tempus urna et.Nunc <br />consequat interdum varius sit amet consectetur. Nunc pulvinar sapien <br />et ligula ullamcorper malesuada proin libero.</Typography>
                        <img src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Testimonial-02.jpg" alt="" />
                        <Typography variant="h4">Simon Segar  </Typography>
                        <Typography variant="h6" className='endtexs'>Germany   </Typography>
                    </div>
                    <div className='slider-1'>
                        <Typography variant="h6">TESTIMONIAL TIME</Typography>
                        <Typography variant="h2">Our Customers Speak</Typography>
                        <Box className='star'>
                            <StarIcon></StarIcon>
                            <StarIcon></StarIcon>
                            <StarIcon></StarIcon>
                            <StarIcon></StarIcon>
                            <StarBorderIcon></StarBorderIcon>
                        </Box>
                        <Typography variant="h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do<br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br />ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br />aliquip ex ea commodo consequat eiusmod tempor incididunt ut.</Typography>
                        <img src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Testimonial-03.jpg" alt="" />
                        <Typography variant="h4">Sara Helmand  </Typography>
                        <Typography variant="h6" className='endtexs'>France    </Typography>
                    </div>

                </Slider>

            </Box>

        </>
    )
}

export default Customers
