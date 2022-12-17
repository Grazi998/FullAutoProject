import React from "react";
import PageIntro from "./PageIntro";
import Navigation from "./Navigation";
import HeroSection from "./HomepageElements/HeroSection";
import PageContent from "./HomepageElements/PageContent";

import "../css/compiled/Homepage.css";

function Homepage() {
  return (
    <div>
      <PageIntro /> 
      <div id="homepage">
        <HeroSection />
        <PageContent />
      </div>
    </div>
  );
}

export default Homepage;
