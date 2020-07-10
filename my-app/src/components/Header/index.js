import React, { useState } from "react";

import ContentWidthLimiter from "../ContentWidthLimiter";
import Navbar from "./Navbar";
import Button from "../Button";
import HamburgerButton from "./HamburgerButton";
import Logo from "../Logo";

import "./styles.scss";
import { headerNavbarList } from "../../constants/landingPage";
import LandingSidebar from "./LandingSidebar";

function Header() {
  const [isSidebarShow, toggleSidebarShow] = useState(false);

  function toggleHandler() {
    toggleSidebarShow(!isSidebarShow);
  }

  return (
    <>
      <header className="header">
        <ContentWidthLimiter>
          <div className="header__content-container">
            <Logo />
            <div className="header__nav-wrapper">
              <Navbar />
              <HamburgerButton
                handleClick={toggleHandler}
                isOpen={isSidebarShow}
              />
              <Button name="Login" className="button--login" />
            </div>
          </div>
        </ContentWidthLimiter>
      </header>

      <LandingSidebar isOpen={isSidebarShow} list={headerNavbarList} />
    </>
  );
}

export default Header;
