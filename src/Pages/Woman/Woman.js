import React from "react";
import WomanComponent from "../../Components/WomanComponent/WomanComponent";
import Header from "../../Components/Header/Header.js";
import Footer from "../../Components/Footer/Footer.js";
const Woman = () => {
  return (
    <div className="womanmaincontainer">
      <Header />
      <WomanComponent />
      <Footer />
    </div>
  );
};

export default Woman;
