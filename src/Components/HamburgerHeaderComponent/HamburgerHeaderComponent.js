// HamburgerHeaderComponent.js
import React, { useState } from "react";
import "./HamburgerHeaderComponent.css";
import MobileHeader from "../../Assets/mobileheader.png";
import { Link } from "react-router-dom";
const HamburgerHeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="hamburgermenuclass">
      <header className="App-header">
        <div className="left-content">
          <img src={MobileHeader} alt="MobileHeader"></img>
          <p className="mobileheadersepetim">Sepetim </p>
        </div>
        <div className="right-content">
          <div className="menu-toggle" onClick={toggleMenu}>
            &#9776;
          </div>
        </div>
        <nav className={`menu ${isOpen ? "open" : ""}`}>
          <div className="close-button" onClick={closeMenu}>
            &times;
          </div>
          <ul>
            <li>
              <Link to={"/"} onClick={closeMenu}>
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link to={"/basket"} onClick={closeMenu}>
                Sepet
              </Link>
            </li>
            <li>
              <Link to={"/woman"} onClick={closeMenu}>
                Kadın
              </Link>
            </li>
            <li>
              <Link to={"/men"} onClick={closeMenu}>
                Erkek
              </Link>
            </li>
            <li>
              <Link to={"/kid"} onClick={closeMenu}>
                Çocuk
              </Link>
            </li>
            <li>
              <Link to={"/signup"} onClick={closeMenu}>
                Kaydol
              </Link>
            </li>
            <li>
              <Link to={"/login"} onClick={closeMenu}>
                Giriş
              </Link>
            </li>
            <li>
              <Link to={"/contact"} onClick={closeMenu}>
                İletişim
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default HamburgerHeaderComponent;
