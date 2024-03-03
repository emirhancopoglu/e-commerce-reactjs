import React from "react";
import "./Men.css";
import MenComponent from "../../Components/MenComponent/MenComponent";
import Header from "../../Components/Header/Header.js";
import Footer from "../../Components/Footer/Footer.js";

const Men = () => {
  return (
    <div className="mainmencontainer">
      <Header />
      <MenComponent />
      <Footer />
    </div>
  );
};

export default Men;
