import React from 'react'
import Slider from "react-slick";
import Typography from '@mui/material/Typography'





function Img2() {
    var settings = {
        dots: true,
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


        </>
    )
}

export default Img2


