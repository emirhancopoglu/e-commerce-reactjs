import React from "react";
import "./SignupComponent.css";
const SignupComponent = () => {
  return (
    <div className="signupcompmaincontainer">
      <div className="signupcompcontainer">
        <div className="signupcontainer">
          <form className="signupform">
            <div className="usernamecontainer">
              <input type="text" placeholder="Adınız" required></input>
            </div>
            <div className="emailcontainer">
              <input type="email" placeholder="E-Posta" required></input>
            </div>
            <div className="passwordcontainer">
              <input type="password" placeholder="Parola" required></input>
            </div>
            <div className="contractcontainer">
              <input type="checkbox"></input>
              <p>
                Kişisel verilerimin işlenmesine yönelik{" "}
                <span>
                  <a href="/">aydınlatma metnini </a>{" "}
                </span>
                okudum ve anladım.
              </p>
            </div>
            <div className="formbutton">
              <button className="signupformbutton">KAYDOL</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
