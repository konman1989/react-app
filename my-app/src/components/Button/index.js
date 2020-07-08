import React from "react";

import "./styles.scss";

function Button({ className, name }) {
  return <button className={`button ${className}`}>{name}</button>;
}

export default Button;
