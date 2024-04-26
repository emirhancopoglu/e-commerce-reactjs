import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header.js";
import BasketComponent from "../../Components/BasketComponent/BasketComponent.js";
import Footer from "../../Components/Footer/Footer.js";
import HamburgerHeaderComponent from "../../Components/HamburgerHeaderComponent/HamburgerHeaderComponent.js";
import BreadComp from "../../Components/BreadsCrump/BreadsComp.jsx";
const Basket = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  return (
    <div>
      <HamburgerHeaderComponent />
      <Header />
      <BreadComp breadHeader={"Sepet"} text={"/ Sepet"} />
      <BasketComponent cart={cart} />
      <Footer />
    </div>
  );
};

export default Basket;
