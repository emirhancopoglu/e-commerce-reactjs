import React from "react";
import "./BreadsCompStyle.css";
const BreadsComp = ({ text, breadHeader }) => {
  return (
    <div className="mainbreadcontainer">
      <div className="breadcontainer">
        <ul className="breadul">
          <li>
            <p className="breadp">{breadHeader}</p>
          </li>
          <li>
            <p>
              <a href="/">
                <span>Anasayfa </span>
              </a>
              {text}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BreadsComp;
