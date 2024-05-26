import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlidesShow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ width: '100%',marginBottom: '20px' , backgroundColor:"#e0e1dd"}}>
      <Slider {...settings}>
        <div>
         <img src="../../src/assets/Images/sports.jpg" alt="Slide 1" style={{ width: '100%', height: 'auto' }} />
          <h1 style={{textAlign:'center',color:"#023047"}}>PowerGear: <br /> Fueling Your Potential </h1>
        </div>
        <div>
          <img src="../../src/assets/Images/sposor.png" alt="Slide 2" style={{ width: '100%', height: 'auto' }} />
          <h1 style={{textAlign:'center',color:"#023047"}}>Contact us for sponsorship requests</h1>
        </div>
        
      </Slider>
    </div>
  );
};

export default SlidesShow;