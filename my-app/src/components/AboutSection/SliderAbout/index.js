import React from "react";

import { aboutTabList } from "../../../constants/landingPage";
import { ReactIcon } from "../../ReactIcon";

import "./styles.scss";

export const SliderAbout = (props) => {
  const { name } = props;
  return aboutTabList
    .filter((item) => item.name === name)
    .map((item, index) => {
      return (
        <div key={index} className="slider-about">
          <ReactIcon size="about-tab" color="blue">
            {item.icon()}
          </ReactIcon>
          <div className="slider-about__text-wrapper">
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        </div>
      );
    });
};
