import React from "react";

import ContentWidthLimiter from "../ContentWidthLimiter";
import Button from "../Button";
import { HomeSlider } from "./HomeSlider";

import "./styles.scss";

function HomeSection() {
  return (
    <section className="home">
      <ContentWidthLimiter>
        <div className="home__content-container">
          <HomeSlider />
          <Button name="Become a Member" className="button--home" />
        </div>
      </ContentWidthLimiter>
    </section>
  );
}

export default HomeSection;
