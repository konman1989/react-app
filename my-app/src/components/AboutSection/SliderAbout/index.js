import React from "react";

import ImageWrapper from "../../ImageWrapper";
import { aboutSliderList } from "../../../constants/landingPage";

import "./styles.scss";

function SliderAbout() {
  return aboutSliderList.map((item, index) => {
    return (
      <div key={index} className="slider-about">
        <ImageWrapper
          className={item.imgClassName}
          src={item.img}
          name={item.imgName}
        />
        <div className="slider-about__text-wrapper">
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </div>
      </div>
    );
  });
}

export default SliderAbout;
