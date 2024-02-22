import React from "react";
import "../Contact/Contact.css";
import Header from "../../Components/Header/Header.js";
import ContactComponents from "../../Components/ContactComponent/ContactComponents.js";
import Footer from "../../Components/Footer/Footer.js";

const Contact = () => {
  return (
    <div className="maincontactcontainer">
      <Header />
      <ContactComponents />
      <Footer />
    </div>
  );
};

export default Contact;
