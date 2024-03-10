import React from "react";
import "./LoginComponent.css";

const LoginComponents = () => {
  return (
    <div className="logincompmaincontainer">
      <div className="logincompcontainer">
        <div className="logincontainer">
          <div className="formcontainer">
            <form className="userdetailform">
              <div className="mailandpasswordcontainer">
                <div className="emailplace">
                  <input type="text" placeholder="E-posta" required></input>
                </div>
                <div className="passwordplace">
                  <input type="password" placeholder="Parola" required></input>
                </div>
                <div className="formsendcontainer">
                  <button className="formsendbutton">GİRİŞ</button>
                  <a href="/">
                    <p>Parolanızı mı unuttunuz?</p>{" "}
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponents;
