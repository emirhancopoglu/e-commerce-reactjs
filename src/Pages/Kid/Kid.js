import React from "react";
import KidComponent from "../../Components/KidComponent/KidComponent";
import Header from "../../Components/Header/Header.js";
import Footer from "../../Components/Footer/Footer.js";
import HamburgerHeaderComponent from "../../Components/HamburgerHeaderComponent/HamburgerHeaderComponent.js";
import BreadsComp from "../../Components/BreadsCrump/BreadsComp.jsx";

const Kid = () => {
  return (
    <div className="mainkidcontainer">
      <HamburgerHeaderComponent />
      <Header />
      <BreadsComp breadHeader={"Çocuk"} text={"/ Çocuk"} />
      <KidComponent />
      <Footer />
    </div>
  );
};

export default Kid;
