import React from "react";
import Header from "../../Components/Header/Header.js";
import BasketComponent from "../../Components/BasketComponent/BasketComponent.js";
import Footer from "../../Components/Footer/Footer.js";

const Basket = () => {
  return (
    <div className="basketmaincontainer">
      <Header />
      <BasketComponent />
      <Footer />
    </div>
  );
};

export default Basket;
