import React from "react";

import bgImage1 from "../../media/images/AboutUs/bg1.png";
import bgImage2 from "../../media/images/AboutUs/bg2.png";
import bgImage3 from "../../media/images/AboutUs/bg3.png";
import person1 from "../../media/images/AboutUs/woman.png";
import person2 from "../../media/images/AboutUs/woman1.png";
import person3 from "../../media/images/AboutUs/man.png";

function AboutUs() {
  return (
    <div id="aboutUs">
      <div className="about_us">
        <div className="about_us_container">
          <div className="about_us_container_content container">
            <div className="about_us_container_content_header">
              <div className="about_us_container_content_title">About Us</div>
              <div className="about_us_container_content_text">
                We are team of experienced engineers and technicians striving to
                optimize and automatize industrial production. Company connects
                mechanical engineering knowledge with robotics and automation by
                creating custom made solutions for each customer in order to
                reduce costs and increase throughput of their companies.
              </div>
              <div className="about_us_container_content_benefits">
                <div className="about_us_container_content_benefits_list">
                  <div className="about_us_container_content_benefits_list_name">
                    Benefits for our clients:{" "}
                  </div>
                  <div className="about_us_container_content_benefits_list_wrapper">
                    <ul>
                      <li>Boosted productivity and efficiency </li>
                      <li>Enhanced system flexibility</li>
                      <li>Increased product quality</li>
                      <li>Increased cost savings</li>
                      <li>Advanced data tracking and analytics</li>
                      <li>Reduced waste</li>
                      <li>Freeing workers for higher-value tasks</li>
                      {/* <li></li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
