import React from 'react'
import Slider from "react-slick";
import Typography from '@mui/material/Typography'





function Img1() {
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
            </div>


        </>
    )
}

export default Img1


