// HamburgerHeaderComponent.js
import React, { useState } from "react";
import "./HamburgerHeaderComponent.css";
import MobileHeader from "../../Assets/mobileheader.png";

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
              <a href="/" onClick={closeMenu}>
                Ana Sayfa
              </a>
            </li>
            <li>
              <a href="/basket" onClick={closeMenu}>
                Sepet
              </a>
            </li>
            <li>
              <a href="/woman" onClick={closeMenu}>
                Kadın
              </a>
            </li>
            <li>
              <a href="/men" onClick={closeMenu}>
                Erkek
              </a>
            </li>
            <li>
              <a href="/kid" onClick={closeMenu}>
                Çocuk
              </a>
            </li>
            <li>
              <a href="/contact" onClick={closeMenu}>
                İletişim
              </a>
            </li>
            <li>
              <a href="/signup" onClick={closeMenu}>
                Kaydol
              </a>
            </li>
            <li>
              <a href="/login" onClick={closeMenu}>
                Giriş
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default HamburgerHeaderComponent;
