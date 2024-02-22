import React from "react";
import Header from "../../Components/Header/Header.js";
import LoginComponent from "../../Components/LoginComponent/LoginComponents.js";
import Footer from "../../Components/Footer/Footer.js";

const Login = () => {
  return (
    <div className="loginpagemaincontainer">
      <Header />
      <LoginComponent />
      <Footer />
    </div>
  );
};

export default Login;
