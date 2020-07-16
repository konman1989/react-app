import React from "react";

import ImageWrapper from "../../ImageWrapper";
import Button from "../../Button";

import { projectsCardList } from "../../../constants/landingPage";

import "./styles.scss";

export default function CardsList() {
  return (
    <div className="projects__cards-list">
      <ul className="cards-list">
        {projectsCardList.map((item, index) => {
          const progressBar = item.percentFunded.split(" ")[0];

          return (
            <li className="cards-list__item" key={index}>
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
                <div
                  className="text-wrapper__progress-bar"
                  style={{
                    background: `linear-gradient(to right, #add136 ${progressBar}, #e3e3e3 ${progressBar} 100%)`,
                  }}
                />
                <div className="text-wrapper__progress-text">
                  <p>{item.percentFunded}</p>
                  <p>{item.daysLeft}</p>
                </div>
                <div className="text-wrapper__button">
                  <Button
                    className="button__projects-details button__projects-details--long"
                    name="see projects details"
                  />
                  <Button
                    className="button__projects-details button__projects-details--short"
                    name="details"
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
