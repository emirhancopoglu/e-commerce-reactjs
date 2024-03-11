import React from "react";
import KidComponent from "../../Components/KidComponent/KidComponent";
import Header from "../../Components/Header/Header.js";
import Footer from "../../Components/Footer/Footer.js";
import HamburgerHeaderComponent from "../../Components/HamburgerHeaderComponent/HamburgerHeaderComponent.js";

const Kid = () => {
  return (
    <div className="mainkidcontainer">
      <HamburgerHeaderComponent />
      <Header />
      <KidComponent />
      <Footer />
    </div>
  );
};

export default Kid;
