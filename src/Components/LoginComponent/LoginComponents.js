import React from "react";
import "./LoginComponent.css";

const LoginComponents = () => {
  return (
    <div className="logincompmaincontainer">
      <div className="logincompcontainer">
        <div className="logincontainer">
          <div className="formcontainer">
            <form className="userdetailform">
              <div className="emailplace">
                <input type="text" placeholder="E-posta" required></input>
              </div>
              <div className="passwordplace">
                <input type="text" placeholder="Parola" required></input>
              </div>
              <div className="formsendcontainer">
                <button className="formsendbutton">GİRİŞ</button>
                <a href="/">
                  <p>Parolanızı mı unuttunuz?</p>{" "}
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponents;
