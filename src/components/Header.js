import React from "react";
import "./Header.css";
import Logo from "../robinhood.svg";
import SearchIcon from "@material-ui/icons/Search";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <a href="/">
          <img src={Logo} alt="" />
        </a>
      </div>

      <div className="header__search">
        <div className="header__searchContainer">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__menu">
        <a href="#">Free Stocks</a>
        <a href="#">Portfolio</a>
        <a href="#">Cash</a>
        <a href="#">Messages</a>
        <a href="#">Account</a>
      </div>
    </div>
  );
};

export default Header;
