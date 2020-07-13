import React from "react";

import ContentWidthLimiter from "../ContentWidthLimiter";
import ImageWrapper from "../ImageWrapper";
import Button from "../Button";
import { promoCardList } from "../../constants/landingPage";

import "./styles.scss";

function Promo() {
  return (
    <section className="promo">
      <ContentWidthLimiter>
        <div className="promo__content-container">{promoCard()}</div>
      </ContentWidthLimiter>
    </section>
  );
}

function promoCard() {
  return promoCardList.map((item, index) => {
    return (
      <div className="card" key={index}>
        <ImageWrapper
          className={item.imgClassName}
          src={item.img}
          name={item.imgName}
        />
        <div className="card__text-wrapper">
          <h2>{item.title}</h2>
          <p>{item.text}</p>
          <Button name={item.buttonName} className={item.buttonClassName} />
        </div>
      </div>
    );
  });
}

export default Promo;
