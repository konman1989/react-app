import classNames from "classnames";
import React from "react";
import types from "prop-types";

import "./styles.scss";

export const HomeSliderCard = (props) => {
  const { title, subtitle } = props;
  const nameClass = classNames({
    "home-slider-card": true,
  });
  return (
    <div className={nameClass}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
};

HomeSliderCard.propTypes = {
  example: types.bool,
};

HomeSliderCard.defaultProps = {
  example: true,
};
