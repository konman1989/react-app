import React from "react";

import ContentWidthLimiter from "../ContentWidthLimiter";
import ImageWrapper from "../ImageWrapper";
import Button from "../Button";
import promo1 from "../../assets/images/promo-1.svg";
import promo2 from "../../assets/images/promo-2.svg";

import "./styles.scss";

const promoCardList = [
  {
    img: promo1,
    imgClassName: "image-wrapper--promo",
    imgName: "promo-1",
    buttonClassName: "button__promo button__promo--blue",
    buttonName: "Become A Member",
    title: "Find Properties",
    text:
      "Sign up to browse the portfolio. Your journey to becoming a real estate baron starts here.",
  },
  {
    img: promo2,
    imgClassName: "image-wrapper--promo",
    imgName: "promo-2",
    buttonClassName: "button__promo button__promo--green",
    buttonName: "Submit Your Project",
    title: "Find Buyers",
    text:
      "Sign up to browse the portfolio. Your journey to becoming a real estate baron starts here.",
  },
];

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
  return promoCardList.map((item) => {
    return (
      <div className="card">
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
