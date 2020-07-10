import classNames from "classnames";
import types from "prop-types";
import React from "react";

import "./styles.scss";

LandingSidebar.propTypes = {
  isOpen: types.bool.isRequired,
};

LandingSidebar.defaultProps = {
  isOpen: false,
};

function LandingSidebar({ isOpen, list }) {
  const sidebarClass = classNames({
    "landing-sidebar": true,
    "landing-sidebar--open": isOpen,
  });

  return (
    <aside className={sidebarClass}>
      <div className="landing-sidebar__list">
        {list.map((item, index) => {
          return (
            <div className="landing-sidebar__list-item">
              <a href={`#${item.to}`} key={index}>
                {item.name}
              </a>
            </div>
          );
        })}
      </div>
    </aside>
  );
}

export default LandingSidebar;
