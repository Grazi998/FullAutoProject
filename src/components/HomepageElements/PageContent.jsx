import React from "react";
import OurServices from "./OurServices";
import AboutUs from "./AboutUs";
import Newsletter from "./Newsletter";

function PageContent() {
  return (
    <div id="pageContent">
      <AboutUs />
      <OurServices />
      <Newsletter />
    </div>
  );
}

export default PageContent;
