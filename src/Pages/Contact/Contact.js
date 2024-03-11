import React from "react";
import Header from "../../Components/Header/Header.js";
import ContactComponents from "../../Components/ContactComponent/ContactComponents.js";
import Footer from "../../Components/Footer/Footer.js";
import HamburgerHeaderComponent from "../../Components/HamburgerHeaderComponent/HamburgerHeaderComponent.js";

const Contact = () => {
  return (
    <div className="maincontactcontainer">
      <HamburgerHeaderComponent />
      <Header />
      <ContactComponents />
      <Footer />
    </div>
  );
};

export default Contact;
