import React from "react";

import { aboutNavbarList } from "../../../constants/landingPage";

import "./styles.scss";

function NavbarAbout() {
  return (
    <nav className="navbar-about">
      {aboutNavbarList.map((item, index) => {
        return (
          <a className="navbar-about__item" href={`#${item.to}`}>
            <span className="navbar-about__icon">{index + 1}</span>
            <p className="navbar-about__text">{item.name}</p>
          </a>
        );
      })}
    </nav>
  );
}

export default NavbarAbout;
