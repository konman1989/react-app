import React from "react";

import ImageWrapper from "../../ImageWrapper";
import { testimonialsList } from "../../../constants/landingPage";

import "./styles.scss";

export default function TestimonialsSlider() {
  return (
    <ul className="slider">
      {testimonialsList.map((item, index) => {
        return (
          <li className="slider__item" key={index}>
            <div className="slider__text-wrapper">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span />
            </div>
            <div className="slider__author-wrapper">
              <ImageWrapper
                className={item.image.imgClassName}
                name={item.image.imgName}
                src={item.image.img}
              />
              <span>{item.author}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
