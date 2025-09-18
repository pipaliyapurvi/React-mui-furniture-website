import Typography from "@mui/material/Typography";
import React from "react";
import Slider from "react-slick";
import './App.css';
import Button from "@mui/material/Button";

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
            <div className="hero">
                <Slider {...settings}>
                    <div className="img-1">
                        <img
                            src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-1-slider-img-02-1536x800.jpg"
                            alt="Slide 1"
                        />
                        <Typography variant="h6">Create Memories</Typography>
                        <Typography variant="h2">Embrace The Beauty Of Furniture's</Typography>
                        <Typography variant="h5">
                            Ut placerat orci nulla pellentesque posuere lorem ipsum dolor. A <br />condimentum vitae sapien pellentesque habitant morbi tristique<br /> senectus. Faucibus turpis in eu mi pellentesque posuere<br /> bibendum neque egestas. Maecenas accumsan lacus vel <br />facilisis volutpat.
                        </Typography>
                        <Button className="btnn">Shop Now</Button>

                    </div>
                    <div className="img-2">
                        <img
                            src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-1-slider-img-05-1536x800.jpg"
                            alt="Slide 2"
                        /><Typography variant="h6">Timeless Elegance</Typography>
                        <Typography variant="h2">Discover Furniture's For Living</Typography>
                        <Typography variant="h5">
                            Consectetur a erat nam at. Facilisis magna etiam tempor orci.<br /> Sem et tortor consequat id. Fermentum egestas tellus. Nunc eu <br />hendrerit turpis. Fusce non lectus sem. In pellentesque nunc non<br /> Donec pretium gravida neque et placerat.                        </Typography>
                    </div>
                    <div className="img-3">
                        <img
                            src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-1-slider-img-04-1536x800.jpg"
                            alt="Slide 3"
                        />
                        <Typography variant="h6">Smart Solution</Typography>
                        <Typography variant="h2">Enjoy With Style & Comfort</Typography>
                        <Typography variant="h5">
                            Feugiat pretium nibh ipsum consequat nisl vel pretium lectus<br /> quam. Aliquam ut porttitor leo a diam sollicitudin. Nam at lectus<br /> urna duis convallis. At urna condimentum pretium lectus<br /> pretium lectus quam mattis pellentesque id nibh tortor id.
                        </Typography>
                    </div>
                </Slider >
            </div >
        </>
    );
}

export default Hero;
