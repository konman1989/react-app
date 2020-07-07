import React from "react";

import "./styles.scss";

function ImageWrapper({ className, name, src }) {
  return (
    <div className={`image-wrapper ${className}`}>
      <img src={src} alt={name} />
    </div>
  );
}

export default ImageWrapper;
