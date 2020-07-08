import React from "react";

import Header from "../../components/Header";
import HomeSection from "../../components/HomeSection";
import AboutSection from "../../components/AboutSection";
import Promo from "../../components/Promo";

function LandingPage() {
  return (
    <div>
      <Header />
      <HomeSection />
      <AboutSection />
      <Promo />
    </div>
  );
}

export default LandingPage;
