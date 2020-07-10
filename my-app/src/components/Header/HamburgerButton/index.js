import classNames from "classnames";
import types from "prop-types";
import React from "react";

import "./styles.scss";

HamburgerButton.propTypes = {
  handleClick: types.func,
  isOpen: types.bool.isRequired,
  mirror: types.bool,
};

HamburgerButton.defaultProps = {
  isOpen: false,
  mirror: false,
};

function HamburgerButton({ handleClick, isOpen, mirror }) {
  const modifyButton = classNames({
    "hamburger-btn": true,
    "hamburger-btn--mirror-open": mirror && isOpen,
    "hamburger-btn--mirror": mirror,
    "hamburger-btn--open": isOpen,
  });

  return (
    <button className={modifyButton} onClick={handleClick}>
      <p />
      <p />
      <p />
    </button>
  );
}

export default HamburgerButton;
