import React from "react";
import Slider from "react-slick";
import hero1 from "../../Assets/hero1.png";
import hero2 from "../../Assets/hero2.png";
import hero3 from "../../Assets/hero3.png";
import "../Carousel/Carousel.css";

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="maincarouselcontainer">
      <Slider {...settings}>
        <div className="herocarousel1">
          <img src={hero3} alt="Hero" className="heroimagemodels"></img>
        </div>
        <div className="herocarousel2">
          <img src={hero2} alt="Hero" className="heroimagemodels"></img>
        </div>
        <div className="herocarousel3">
          <img src={hero1} alt="Hero" className="heroimagemodels"></img>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
