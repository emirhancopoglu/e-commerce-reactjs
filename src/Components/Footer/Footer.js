import React from "react";
import "./Footer.css";
import github from "../../Assets/github.png";
import instagram from "../../Assets/instagram.png";
import linkedin from "../../Assets/linkedin.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mainfootercontainer">
      <div className="footercontainer">
        <div className="footerdetails">
          <ul className="sepetimul">
            <li>
              <p className="footercompanyname">
                Sepetim Elektronik Alışveriş A.Ş
              </p>
            </li>
            <li className="companyadressli">
              Maslak Mahallesi Saat Sokak Spine Tower No:5 İç Kapı No:19
            </li>
            <li className="companyadressli">Sarıyer/İstanbul</li>
            <li>
              <a href="localhost:3000">
                <p className="companywebsite">www.sepetim.netlify.app</p>
              </a>
            </li>
          </ul>

          <ul className="sepetimul3">
            <li>
              <p className="sepetimcategory">Kategori</p>
            </li>
            <Link to={"/woman"}>
              <li>Kadın</li>
            </Link>
            <Link to={"/men"}>
              <li>Erkek</li>
            </Link>
            <Link to={"/kid"}>
              <li>Çocuk</li>
            </Link>
          </ul>
          <ul className="sepetimul2">
            <li>
              <p className="sepetimhelp">Sepetim Destek</p>
            </li>
            <a href="/contact">
              <li>İletişim</li>
            </a>
            <a href="/">
              <li>444 4 522</li>
            </a>
            <a href="/">
              <li>Whatsapp Destek</li>
            </a>
            <a href="/">
              <li>Görüntülü Destek</li>
            </a>
            <a href="/">
              <li>Sipariş Takip</li>
            </a>
          </ul>
          <ul className="sepetimul4">
            <li>
              <p className="sepetimsubs">Abone Ol</p>
            </li>
            <li>
              <input
                type="email"
                placeholder="Fırsat Bildirimleri Al"
                required
              ></input>
            </li>
            <li>
              <button className="sendmailbutton">Gönder</button>
            </li>
          </ul>
        </div>
        <div className="footericons">
          <a href="https://github.com/emirhancopoglu">
            <img src={github} alt="Github"></img>
          </a>
          <a href="https://www.linkedin.com/in/emirhancopoglu/">
            <img src={linkedin} alt="Linkedin"></img>
          </a>
          <a href="https://instagram.com/mocheesca">
            <img src={instagram} alt="İnstagram"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
