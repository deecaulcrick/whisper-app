import React from "react";
import logo from "../assets/Whisper.svg";
import pfp from "../assets/test-image.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="search">
        <input type="text" placeholder="Search" id="search" />
      </div>

      <div className="header__profile">
        <img src={pfp} className="pfp" />
        <p>Debruhhh</p>
      </div>
      <div className="header__btns"></div>
    </div>
  );
};

export default Header;
