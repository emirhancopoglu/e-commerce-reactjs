import React from "react";
import sepetimlogo from "../../Assets/sepetimlogo.png";
import "../Header/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="headercontainer">
        <div className="headerlogo-links">
          <a href="/">
            {" "}
            <img src={sepetimlogo} alt="Sepetim Logo"></img>
          </a>
        </div>
        <div className="headerlinks">
          <ul>
            <a href="/">
              <li>Kadın</li>{" "}
            </a>
            <a href="/">
              {" "}
              <li>Erkek</li>
            </a>
            <a href="/">
              <li>Çocuk</li>
            </a>

            <Link to={"/contact"}>
              <li>İletişim</li>
            </Link>
          </ul>
        </div>
        <div className="headeruserbuttons">
          <ul>
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
