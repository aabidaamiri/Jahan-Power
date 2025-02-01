import React from 'react'
import Slider from "react-slick";
import bb1 from '../../src/img/bb (1).jpeg'
import bb2 from '../../src/img/bb (2).jpeg'
import bb3 from '../../src/img/bb (3).jpeg'


const Herosection = () => {
    
  const settings = {
    className: "slider variable-width",
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <div>
      <section className='home-body' id='home'>
        <br />
        <div className="container">
          <Slider {...settings}>
            <div className="col-xs-12 slide-container">
              <img className="img-rounded" src={bb1} alt="" />
            </div>

            <div className="col-xs-12 slide-container">
              <img className="img-rounded" src={bb2} alt="" />
            </div>

            <div className="col-xs-12 slide-container">
              <img className="img-rounded" src={bb3} alt="" />
            </div>

          </Slider>
        </div>

      </section>
    </div>
  )
}

export default Herosection
