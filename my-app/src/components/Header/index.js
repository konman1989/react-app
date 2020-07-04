import React from "react";

import ContentWidthLimiter from "../ContentWidthLimiter";
import Navbar from "../Navbar";
import Button from "../Button";

import "./styles.scss";

function Header() {
  return (
    <header className="header">
      <ContentWidthLimiter>
        <div className="header__content-container">
          <Navbar />
          <Button name="Login" className="button--login" />
        </div>
      </ContentWidthLimiter>
    </header>
  );
}

export default Header;
