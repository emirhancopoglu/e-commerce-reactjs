import React from "react";
import Slider from "react-slick";
import "./TrendingCarousel.css";

const TrendingCarousel = () => {
  const data = [
    {
      price: "66TL",
      name: "The Warehouse",
      imageUrl: "https://cdn.dummyjson.com/product-images/55/thumbnail.jpg",
    },
    {
      price: "23TL",
      name: "Vintage Apparel",
      imageUrl: "https://cdn.dummyjson.com/product-images/51/thumbnail.jpg",
    },
    {
      price: "600TL",
      name: "Ghazi Fabric",
      imageUrl: "https://cdn.dummyjson.com/product-images/43/thumbnail.jpg",
    },
    {
      price: "79TL",
      name: "Ladies Multicolored Dress",
      imageUrl: "https://cdn.dummyjson.com/product-images/44/thumbnail.jpg",
    },
    {
      price: "120TL",
      name: "Leather Straps Wristwatch",
      imageUrl: "https://cdn.dummyjson.com/product-images/61/thumbnail.jpg",
    },
    {
      price: "46TL",
      name: "Leather Brand Watch",
      imageUrl: "https://cdn.dummyjson.com/product-images/62/thumbnail.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="trendingcarousel">
      <div className="slider-container">
        <h3>Benzer Ürünler</h3>
        <Slider {...settings}>
          {data.map((item) => (
            <div className="cardclass">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="trendingproductimg"
              ></img>
              <h3> {item.name}</h3>
              <h3>{item.price}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TrendingCarousel;
