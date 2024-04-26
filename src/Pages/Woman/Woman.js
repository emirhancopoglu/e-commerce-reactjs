import React from "react";
import WomanComponent from "../../Components/WomanComponent/WomanComponent";
import Header from "../../Components/Header/Header.js";
import Footer from "../../Components/Footer/Footer.js";
import HamburgerHeaderComponent from "../../Components/HamburgerHeaderComponent/HamburgerHeaderComponent.js";
import BreadsComp from "../../Components/BreadsCrump/BreadsComp.jsx";
const Woman = () => {
  return (
    <div className="womanmaincontainer">
      <HamburgerHeaderComponent />
      <Header />
      <BreadsComp breadHeader={"Kadın"} text={"/Kadın"} />
      <WomanComponent />
      <Footer />
    </div>
  );
};

export default Woman;
