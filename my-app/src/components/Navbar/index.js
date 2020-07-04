import React from "react";

import "./styles.scss";

const navbarList = [
  { name: "home", to: "home" },
  { name: "how it works", to: "how-it-works" },
  { name: "discover a project", to: "discover" },
  { name: "blog", to: "blog" },
  { name: "find out more", to: "find-out-more" },
];

function Navbar() {
  return (
    <nav className="navbar">
      {navbarList.map((item) => {
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
