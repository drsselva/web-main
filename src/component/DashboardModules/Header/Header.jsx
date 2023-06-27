import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="header-left">
          <div className="header-left-logo">
            <img
              src="https://www.gritdigitech.com/assets/img/logo-icon.png"
              alt="logo"
            />
          </div>
          <div className="header-left-text">
            <span>GR</span>
            <span className="it">IT</span>
            <span className="studies">Studies</span>
          </div>
        </div>
        <div className="header-right">
          <p className="LogOut">LogOut</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
