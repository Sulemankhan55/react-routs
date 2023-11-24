import React from "react";
import logo from "../Assets/Images/amazon-logo-1.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-wrapper">
      <header>
        <div className="header-logo">
          <span>
            <img src={logo} alt="" />
          </span>
        </div>
        <div className="header-menus">
          <Link to="/Home" className="menu">
            Home
          </Link>
          <Link to="/product" className="menu">
            Product
          </Link>
          <Link to="/aboutus" className="menu">
            About Us
          </Link>
        </div>
        <div className="header-auth">
          <Link to="/login">Login/Sign-up</Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
