import React from 'react'
import Slider from "react-slick";
import bb1 from '../../src/img/bb (1).jpeg'
import bb2 from '../../src/img/bb (2).jpeg'
import bb3 from '../../src/img/bb (3).jpeg'
import { SlHome } from "react-icons/sl";
import { TbWindow } from "react-icons/tb";


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
    <div className='herosection'>
      <section className='home-body' id='home'>
        <br />
        <div className="hello container">
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

        <div className='alum container'>
          <div>
            <div className='sub-heading'>
              <h2> <i><TbWindow /></i>  المونیم چیست؟  </h2>
            </div>
            <div className='alum-container'>
              <div>
                <p>المونیم یکی از مواد اصلی استفاده شده در تولید لوازم خانگی است. این فلز خاص به دلیل ویژگی‌های خود از جمله سبکی، مقاومت در بقایای شیمیایی و حرارتی، هدایت حرارت و الکتریسیته، به عنوان یک انتخاب ایده‌آل برای تولید انواع مختلف لوازم خانگی مورد استفاده قرار می‌گیرد
                  .
                  از آنجایی که المونیم مقاوم در برابر خوردگی است و همچنین سبک وزن است، این ماده برای تولید لوازم خانگی بسیار مناسب است.
                  ویژگی‌هایی چون شکل‌پذیری عالی، جوشکاری خوب، استحکام در برابر وزن بالا و خوردگی، سبب شده آلیاژهای المونیم کاربرد گسترده‌ای در سازه‌ها و صنایع مختلف داشته باشند.
                </p>
                <p>المونیم کاربردی‌ترین فلز بعد از آهن از نظر کیفیت و ارزش است و تقریبا در بیشتر صنایع استفاده می‌شود.  آلیاژهای این عنصر از قابلیت جوشکاری، پرسکاری، ماشینکاری، لحیم کاری سخت و لحیم کاری نرم برخوردارند. همچنین به ضورت پروفیل‌های ساختمانی و اکسترود شده، ورق، تسمه، فویل، مفتول و میله در بازار وجود دارند. گفتنی است برخی از آلیاژهای المونیم قابلیت جوشکاری ندارند.
                  
                </p>
              </div>

              <div className='alum-img'>
                <img src="https://th.bing.com/th/id/R.af6d68b90769128d5afbb6dd39dac3f4?rik=on0lIoxm4xWGfw&pid=ImgRaw&r=0" alt="" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Herosection
