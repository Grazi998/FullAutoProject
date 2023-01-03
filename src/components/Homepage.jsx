import React, { useEffect, useState } from "react";
import PageIntro from "./PageIntro";
import HeroSection from "./HomepageElements/HeroSection";
import PageContent from "./HomepageElements/PageContent";

import "../css/compiled/Homepage.css";

function Homepage() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    CheckSession();
  }, []);

  const CheckSession = () => {
    let sessionTime = window.sessionStorage.getItem("IntroReplay");

    console.log(sessionTime)
    if (sessionTime == null) {
      window.sessionStorage.setItem(
        "IntroReplay",
        "disable"
      );
      setShowIntro(true);
    } else if(sessionTime=="yes") {
      setShowIntro(false);
    }
  };

  return (
    <div>
      {showIntro && <PageIntro />}
      <div id="homepage">
        <HeroSection />
        <PageContent />
      </div>
    </div>
  );
}

export default Homepage;
