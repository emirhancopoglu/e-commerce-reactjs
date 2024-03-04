import React from "react";
import "./LoadingPage.css";

const LoadingPage = () => {
  return (
    <div className="loadingpagecontainer">
      <div id="loading-indicator">
        <div className="lds-hourglass"></div>
      </div>
    </div>
  );
};

export default LoadingPage;
