import React from "react";
import SignupComponent from "../../Components/SignupComponent/SignupComponent";
import Header from "../../Components/Header/Header.js";
import Footer from "../../Components/Footer/Footer.js";
import HamburgerHeaderComponent from "../../Components/HamburgerHeaderComponent/HamburgerHeaderComponent.js";

const Signup = () => {
  return (
    <div className="signuppagecontainer">
      <HamburgerHeaderComponent />
      <Header />
      <SignupComponent />
      <Footer />
    </div>
  );
};

export default Signup;
