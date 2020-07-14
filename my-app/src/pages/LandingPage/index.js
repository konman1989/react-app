import React from "react";

import Header from "../../components/Header";
import HomeSection from "../../components/HomeSection";
import AboutSection from "../../components/AboutSection";
import Promo from "../../components/Promo";
import Projects from "../../components/Projects";
import Testimonials from "../../components/Testimonials";
import Footer from "../../components/Footer";

function LandingPage() {
  return (
    <div>
      <Header />
      <HomeSection />
      <AboutSection />
      <Promo />
      <Projects />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default LandingPage;
