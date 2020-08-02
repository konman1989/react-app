import React, { useState } from "react";
import classNames from "classnames";
import types from "prop-types";

import "./styles.scss";

export const Tabs = (props) => {
  const { defaultTab, content, links } = props;

  const [activeTabName, setActiveTabName] = useState(
    defaultTab || links[0].name
  );

  const handleTabSet = (name) => {
    setActiveTabName(name);
  };

  const tab = content.find((tab) => tab.name === activeTabName);

  const linkClass = (name) =>
    classNames({
      "tabs__header-link": true,
      "tabs__header-link--active": name === activeTabName,
    });

  return (
    <div className="tabs">
      <div className="tabs__header-scroll-wrapper">
        <div className="tabs__header">
          {links.map((link) => {
            return (
              <div
                className={linkClass(link.name)}
                onClick={() => handleTabSet(link.name)}
                key={link.name}
              >
                <span>{link.title}</span>
                <p>{link.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="tabs__content">{tab.content()}</div>
    </div>
  );
};

Tabs.propTypes = {
  defaultTab: types.string,
  content: types.array.isRequired,
  links: types.array.isRequired,
};
