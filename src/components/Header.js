import React from "react";
import img1 from "../images/img-1.png";
import img2 from "../images/img-2.png";
import img3 from "../images/img-3.png";
import "../header.css";
const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="header-left">
          <div className="header-title"><h1>Recipe-Search</h1></div>
          <div className="header-subtitle">
            <h5>A search Engine to find recipe by their ingredients.</h5>
          </div>
        </div>
        <div className="header-right">
          <img src={img1} alt="" width="200" />
          <img src={img2} alt="" width="200" />
          <img src={img3} alt="" width="200" />
        </div>
      </div>
    </header>
  );
};
export default Header;
