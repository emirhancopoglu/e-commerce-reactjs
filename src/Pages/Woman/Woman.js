import React from "react";
import WomanComponent from "../../Components/WomanComponent/WomanComponent";
import Header from "../../Components/Header/Header.js";
import Footer from "../../Components/Footer/Footer.js";
import HamburgerHeaderComponent from "../../Components/HamburgerHeaderComponent/HamburgerHeaderComponent.js";
const Woman = () => {
  return (
    <div className="womanmaincontainer">
      <HamburgerHeaderComponent />
      <Header />
      <WomanComponent />
      <Footer />
    </div>
  );
};

export default Woman;
