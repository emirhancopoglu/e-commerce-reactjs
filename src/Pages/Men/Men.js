import React from "react";
import MenComponent from "../../Components/MenComponent/MenComponent";
import Header from "../../Components/Header/Header.js";
import Footer from "../../Components/Footer/Footer.js";
import HamburgerHeaderComponent from "../../Components/HamburgerHeaderComponent/HamburgerHeaderComponent.js";

const Men = () => {
  return (
    <div className="mainmencontainer">
      <HamburgerHeaderComponent />
      <Header />
      <MenComponent />
      <Footer />
    </div>
  );
};

export default Men;
