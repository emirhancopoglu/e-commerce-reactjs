import React from "react";
import "./Signup.css";
import SignupComponent from "../../Components/SignupComponent/SignupComponent";
import Header from "../../Components/Header/Header.js";
import Footer from "../../Components/Footer/Footer.js";

const Signup = () => {
  return (
    <div className="signuppagecontainer">
      <Header />
      <SignupComponent />
      <Footer />
    </div>
  );
};

export default Signup;
