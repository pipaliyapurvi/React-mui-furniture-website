import React from 'react'
import Topheder from './Topheder';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Main from './Main';
import Img1 from './Img1';
import Img2 from './Img2';
import Outoplayslider from './Outoplayslider';
import Customers from './Customers'
import Hovercard from './Hovercard';
import ShopCategory from './ShopCategory'
import Email from './Email'
import Footer from './Footer'

function Furniture() {
    return (
        <>
            <Topheder></Topheder>
            <Header></Header>
            <Hero></Hero>
            <About></About>
            <Main></Main>
            <Img1></Img1>
            {/* <Img2></Img2> */}
            <Outoplayslider></Outoplayslider>
            <Customers></Customers>
            <Hovercard></Hovercard>
            <ShopCategory></ShopCategory>
            <Email></Email>
            <Footer></Footer>


        </>
    )
}

export default Furniture
