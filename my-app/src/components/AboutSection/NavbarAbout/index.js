import React from "react";

import "./styles.scss";

const navbarList = [
  { name: "simple", to: "simple" },
  { name: "transparent", to: "transparent" },
  { name: "collaborative", to: "collaborative" },
];

function NavbarAbout() {
  return (
    <nav className="navbar-about">
      {navbarList.map((item, index) => {
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
