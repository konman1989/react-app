import React from "react";

import classnames from "classnames";

import "./styles.scss";

export default function ReactIcon(props) {
  const { className, color, size, onClick, id } = props;

  const reactIconClass = classnames(
    {
      "react-icon": true,
      [`react-icon--color-${color}`]: color,
      [`react-icon--size-${size}`]: size,
    },
    className
  );

  return (
    <div className={reactIconClass} onClick={onClick} id={id}>
      {props.children}
    </div>
  );
}
