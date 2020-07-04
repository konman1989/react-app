import React from "react";

import "./styles.scss";

function ImageWrapper(props) {
  return (
    <div className={`image-wrapper ${props.className}`}>
      <img src={props.src} alt={props.name} />
    </div>
  );
}

export default ImageWrapper;
