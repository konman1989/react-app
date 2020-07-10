import React from "react";
import types from "prop-types";

import "./styles.scss";

ImageWrapper.propTypes = {
  className: types.string,
  name: types.string,
  src: types.string,
};

function ImageWrapper({ className, name, src }) {
  return (
    <div className={`image-wrapper ${className}`}>
      <img src={src} alt={name} />
    </div>
  );
}

export default ImageWrapper;
