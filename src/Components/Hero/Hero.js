import React from "react";
import "./Hero.css";
import womenshop from "../../Assets/Hero/womenshop.jpg";
import manshop from "../../Assets/Hero/manshop.jpg";
import kidshop from "../../Assets/Hero/kidshop.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="herosectioncontainer">
      <div className="herosection">
        <div className="herosectionwomen">
          <Link to={"/woman"}>
            <img src={womenshop} alt="Women"></img>{" "}
          </Link>
          <Link to={"/woman"} className="ahrefcard">
            kadın
          </Link>
        </div>

        <div className="herosectionman">
          <Link to={"/men"}>
            <img src={manshop} alt="Man"></img>{" "}
          </Link>
          <Link to={"/men"} className="ahrefcard">
            erkek
          </Link>
        </div>
        <div className="herosectionkid">
          <Link to={"/kid"}>
            <img src={kidshop} alt="Kids"></img>
          </Link>
          <Link to={"/kid"} className="ahrefcard">
            çocuk
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
