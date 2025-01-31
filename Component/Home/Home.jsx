import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import p1 from '../../src/img/p1.png'
import p2 from '../../src/img/p2.png'
import p3 from '../../src/img/p3.png'
import p4 from '../../src/img/p4.png'
import p5 from '../../src/img/p5.png'
import p6 from '../../src/img/p6.png'
import p7 from '../../src/img/p7.png'
import p8 from '../../src/img/p8.png'
import p9 from '../../src/img/p9.png'
import p10 from '../../src/img/p10.png'


const Home = () => {

  const settings = {
    className: "slider variable-width",
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    
    responsive: [

      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <section className='home-body' id='home'>
        <br />
        <div className="slider-container">
          <Slider {...settings}>
            <div className="container">
              <img className="photo" src={p1} alt="" />
            </div>

            <div className="container">
              <img className="photo" src={p2} alt="" />
            </div>

            <div className="container">
              <img className="photo" src={p3} alt="" />
            </div>
            
            <div className="container">
              <img className="photo" src={p4} alt="" />
            </div>

            <div className="container">
              <img className="photo" src={p5} alt="" />
            </div>

            <div className="container">
              <img className="photo" src={p6} alt="" />
            </div>
          </Slider>
        </div>

<br />

        <div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita temporibus aperiam omnis doloribus quisquam ipsam. Perspiciatis, laboriosam porro delectus ad libero, consequatur nostrum ratione ab at provident enim numquam veritatis.</p>
        </div>
      </section>
    </div>
  )
}

export default Home
