import React from "react";

import ContentWidthLimiter from "../ContentWidthLimiter";
import Button from "../Button";
import "./styles.scss";

function HomeSection() {
  return (
    <section className="home">
      <ContentWidthLimiter>
        <div className="home__content-container">
          <h1>Intellectual Property has the Shelf Life</h1>
          <h2>of a banana.</h2>
          <Button name="Become a Member" className="button--home" />
        </div>
      </ContentWidthLimiter>
    </section>
  );
}

export default HomeSection;
