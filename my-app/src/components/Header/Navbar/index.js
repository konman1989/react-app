import React from "react";

import { headerNavbarList } from "../../../constants/landingPage";

import "./styles.scss";

function Navbar() {
  return (
    <nav className="navbar">
      {headerNavbarList.map((item) => {
        return (
          <a className="navbar__item" href={`#${item.to}`}>
            {item.name}
          </a>
        );
      })}
    </nav>
  );
}

export default Navbar;
