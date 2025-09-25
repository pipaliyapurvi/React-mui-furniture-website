import React from 'react'

const Img1 = () => {
  return (
    <>
      <div className="slider-container" sx={{ display: 'flex', gap: '50px' }}>
        <Slider {...settings}>
          <div className='product-img'>
            <img onClick={() => myfunction("all")} class='main-img' src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-2-01.jpg" alt="" />
            <img class="hover-img" src="	https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-2-02.jpg" alt="" />
          </div>
          <div className='product-img1'>
            <img class='main-img-1' src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-1-04.jpg" alt="" />
            <img class="hover-img-1" src="	https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-1-05.jpg" alt="" />
          </div>
          <div className='product-img2'>
            <img class='main-img-2' src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-7-05.jpg" alt="" />
            <img class="hover-img-2" src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-7-04.jpg" alt="" />
          </div>
        </Slider>
      </div>
    </>
  )
}

export default Img1

