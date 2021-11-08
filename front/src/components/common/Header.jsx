import React from "react";
import { NavLink } from "react-router-dom";

import Search from "./Search";
import Checkout from "./Checkout";
import MenuMb from "./MenuMb";
import Redux from "../../assets/redux.svg";

const Header = () => {
  return (
    <header>
      <nav className="container grid-header">
        <NavLink className="tex-logo" to="/">
          Store <img className="icon-check" src={Redux} alt="redux" />{" "}
        </NavLink>
        <Search />
        <Checkout />
        <MenuMb />
      </nav>
    </header>
  );
};

export default Header;
