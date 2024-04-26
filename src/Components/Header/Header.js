import React, { useState, useEffect } from "react";
import sepetimlogo from "../../Assets/HeaderLogo/sepetimlogo.png";
import "../Header/Header.css";
import { Link } from "react-router-dom";
import basket from "../../Assets//Basket/basket.png";

const Header = () => {
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    const itemCount = cartItems
      ? cartItems.reduce((acc, item) => acc + item.quantity, 0)
      : 0;
    setCartItemCount(itemCount);
  }, []);

  return (
    <div className="header">
      <div className="headercontainer">
        <div className="headerlogo-links">
          <a href="/">
            <img src={sepetimlogo} alt="Sepetim Logo"></img>
          </a>
        </div>
        <div className="headerlinks">
          <ul>
            <Link to={"/woman"}>
              <li>Kadın</li>
            </Link>
            <Link to={"/men"}>
              <li>Erkek</li>
            </Link>
            <Link to={"/kid"}>
              <li>Çocuk</li>{" "}
            </Link>
            <Link to={"/contact"}>
              <li>İletişim</li>
            </Link>
          </ul>
        </div>
        <div className="headeruserbuttons">
          <ul>
            <li>
              <Link to={"/basket"}>
                <img src={basket} alt="Sepet"></img>
                {cartItemCount > 0 && (
                  <span className="cart-item-count">{cartItemCount}</span>
                )}
              </Link>
            </li>
            <li>
              <Link to={"/signup"}>Kaydol</Link>
            </li>

            <li>
              <Link to={"/login"}>
                <button className="headerloginbutton">Giriş</button>{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
