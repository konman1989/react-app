import React from "react";

import "./styles.scss";

function Button(props) {
  return <button className={`button ${props.className}`}>{props.name}</button>;
}

export default Button;
