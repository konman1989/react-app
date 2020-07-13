import React from "react";

import ContentWidthLimiter from "../ContentWidthLimiter";
import TestimonialsSlider from "./TestimonialsSlider";

import "./styles.scss";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <ContentWidthLimiter>
        <div className="testimonials__content-container">
          <div className="testimonials__title-block">
            <h2>Be Part of a Growing International Community</h2>
            <p>
              One of the challenges in networking is everybody thinks it's
              making cold calls to strangers. Actually, it's the people who
              already have strong trust relationships with you
            </p>
          </div>
          <TestimonialsSlider />
        </div>
      </ContentWidthLimiter>
    </section>
  );
}
