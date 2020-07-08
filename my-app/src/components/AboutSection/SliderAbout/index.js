import React from "react";

import ImageWrapper from "../../ImageWrapper";
import aboutGlasses from "../../../assets/images/about-glasses.svg";

import "./styles.scss";

const sliderList = [
  {
    img: aboutGlasses,
    imgClassName: "image-wrapper--glasses",
    imgName: "about-glasses",
    title: "Browse projects, like booking a hotel online !",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et do lore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

function SliderAbout() {
  return sliderList.map((item) => {
    return (
      <div className="slider-about">
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
