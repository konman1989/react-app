import React from "react";
import Slider from "react-slick";

import { HomeSliderCard } from "../HomeSliderCard";
import { homeSliderList } from "../../../constants/landingPage";

import "./styles.scss";

export class HomeSlider extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    return (
      <div className="home-slider">
        <Slider {...settings}>
          {homeSliderList.map((item, index) => {
            return (
              <div className="home-slider__slide" key={index}>
                <HomeSliderCard title={item.title} subtitle={item.subtitle} />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
