import React from "react";
import types from "prop-types";

import "./styles.scss";

Button.propTypes = {
  className: types.string,
  name: types.string,
};

function Button({ className, name }) {
  return <button className={`button ${className}`}>{name}</button>;
}

export default Button;
