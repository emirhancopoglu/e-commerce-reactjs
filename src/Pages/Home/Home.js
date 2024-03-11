import React from "react";
import Header from "../../Components/Header/Header.js";
import Carousel from "../../Components/Carousel/Carousel.js";
import Hero from "../../Components/Hero/Hero.js";
import İnformation from "../../Components/Information/Information.js";
import Footer from "../../Components/Footer/Footer.js";
import HamburgerHeaderComponent from "../../Components/HamburgerHeaderComponent/HamburgerHeaderComponent.js";

const Home = () => {
  return (
    <div className="maincontainer">
      <HamburgerHeaderComponent />
      <Header />
      <Carousel />
      <Hero />
      <İnformation />
      <Footer />
    </div>
  );
};

export default Home;
