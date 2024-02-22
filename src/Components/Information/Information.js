import React from "react";
import iade from "../../Assets/iade.png";
import kapıda from "../../Assets/kapıda.png";
import kargo from "../../Assets/kargo.png";
import sepetim from "../../Assets/sepetim.png";
import safe from "../../Assets/güvenli.png";
import "./Information.css";

const İnformation = () => {
  return (
    <div className="maininformationcontainer">
      <div className="informationcontainer">
        <div className="informationcompany">
          <img src={sepetim} alt="Logo"></img>
          <p className="company-text">Sepetim</p>
        </div>
        <div className="informationcompany">
          <img src={kapıda} alt="Kapıda Öde"></img>
          <p className="company-text">Kapıda öde</p>
        </div>
        <div className="informationcompany">
          <img src={kargo} alt="Hızlı Kargo"></img>
          <p className="company-text">Hızlı teslimat</p>
        </div>
        <div className="informationcompany">
          <img src={safe} alt="Güvenli Alışveriş"></img>
          <p className="company-text">Güvenli alışveriş</p>
        </div>
        <div className="informationcompany">
          <img src={iade} alt="Ücretsiz İade"></img>
          <p className="company-text">Ücretsiz iade</p>
        </div>
      </div>
    </div>
  );
};

export default İnformation;
