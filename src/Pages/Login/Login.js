import React from "react";
import Header from "../../Components/Header/Header.js";
import LoginComponent from "../../Components/LoginComponent/LoginComponents.js";
import Footer from "../../Components/Footer/Footer.js";
import HamburgerHeaderComponent from "../../Components/HamburgerHeaderComponent/HamburgerHeaderComponent.js";

const Login = () => {
  return (
    <div className="loginpagemaincontainer">
      <HamburgerHeaderComponent />
      <Header />
      <LoginComponent />
      <Footer />
    </div>
  );
};

export default Login;
