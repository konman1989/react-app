import React from "react";

import "./styles.scss";

function Logo() {
  return (
    <div className="logo">
      <div className="logo__img-wrapper">
        <p className="logo__item logo__item--round" />
        <p className="logo__item logo__item--large" />
        <p className="logo__item logo__item--middle" />
      </div>
      <div className="logo__text-wrapper">crowdme</div>
    </div>
  );
}

export default Logo;
