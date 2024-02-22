import React from "react";
import "./Hero.css";
import womenshop from "../../Assets/womenshop.jpg";
import manshop from "../../Assets/manshop.jpg";
import kidshop from "../../Assets/kidshop.jpg";

const Hero = () => {
  return (
    <div className="herosectioncontainer">
      <div className="herosection">
        <div className="herosectionwomen">
          <a href="/">
            <img src={womenshop} alt="Women"></img>
          </a>
          <a href="/" className="ahrefcard">
            kadın
          </a>
        </div>
        <div className="herosectionman">
          <a href="/">
            <img src={manshop} alt="Man"></img>{" "}
          </a>
          <a href="/" className="ahrefcard">
            erkek
          </a>
        </div>
        <div className="herosectionkid">
          <a href="/">
            <img src={kidshop} alt="Kids"></img>{" "}
          </a>
          <a href="/" className="ahrefcard">
            çocuk
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
