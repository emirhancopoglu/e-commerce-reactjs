import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header.js";
import BasketComponent from "../../Components/BasketComponent/BasketComponent.js";
import Footer from "../../Components/Footer/Footer.js";

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
      <Header />
      <BasketComponent cart={cart} />
      <Footer />
    </div>
  );
};

export default Basket;
