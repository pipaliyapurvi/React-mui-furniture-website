
import React from "react";
import Slider from "react-slick";

function Hero() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <div className="hero" >
                <Slider {...settings}>
                    <div>
                        <img src="	https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-1-slider-img-02-1536x800.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-1-slider-img-05-1536x800.jpg" alt="" />
                    </div>
                    <div>
                        <img src="	https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-1-slider-img-04-1536x800.jpg" alt="" />
                    </div>

                </Slider>
            </div>

        </>
    )
}

export default Hero
