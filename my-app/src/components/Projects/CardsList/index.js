import React from "react";

import ImageWrapper from "../../ImageWrapper";
import Button from "../../Button";

import { projectsCardList } from "../../../constants/landingPage";

import "./styles.scss";

export default function CardsList() {
  return (
    <div className="projects__cards-list">
      <ul className="cards-list">
        {projectsCardList.map((item) => {
          return (
            <li className="cards-list__item">
              <div className="cards-list__img-wrapper">
                <ImageWrapper
                  className={item.image.imgClassName}
                  src={item.image.img}
                  name={item.image.imgName}
                />
                <div className="cards-list__price">
                  <p>
                    From <span>{item.price}</span>
                  </p>
                </div>
                <div className="cards-list__tag" />
                <span className="cards-list__tag-text">new</span>
              </div>

              <div className="text-wrapper cards-list__text-wrapper">
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <div className="text-wrapper__progress-bar" />
                <div className="text-wrapper__progress-text">
                  <p>{item.percentFunded}</p>
                  <p>{item.daysLeft}</p>
                </div>
                <div className="text-wrapper__button">
                  <Button
                    className="button__projects-details"
                    name="see projects details"
                  />
                  <span />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
