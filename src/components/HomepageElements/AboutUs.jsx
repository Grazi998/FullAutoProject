import React from "react";

import bgImage1 from '../../media/images/AboutUs/bg1.png'
import bgImage2 from '../../media/images/AboutUs/bg2.png'
import bgImage3 from '../../media/images/AboutUs/bg3.png'
import person1 from '../../media/images/AboutUs/woman.png'
import person2 from '../../media/images/AboutUs/woman1.png'
import person3 from '../../media/images/AboutUs/man.png'





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
            </div>
            <div className="about_us_container_content_people">
              <div className="about_us_container_content_people_person">
                <div className="about_us_container_content_people_person_info">
                  <div className="about_us_container_content_people_person_info_image">
                    <img src={bgImage2} className="circle" />
                    <img src={person2} className="img img1" />
                  </div>
                  <div className="about_us_container_content_people_person_info_devider"></div>
                  <div className="about_us_container_content_people_person_info_name">
                    Name
                  </div>
                  <div className="about_us_container_content_people_person_info_title">
                    Title
                  </div>
                </div>
              </div>
              <div className="about_us_container_content_people_person">
                <div className="about_us_container_content_people_person_info">
                  <div className="about_us_container_content_people_person_info_image">
                    <img src={bgImage1} className="circle" />
                    <img src={person1} className="img img2" />
                  </div>
                  <div className="about_us_container_content_people_person_info_devider"></div>
                  <div className="about_us_container_content_people_person_info_name">
                    Name
                  </div>
                  <div className="about_us_container_content_people_person_info_title">
                    Title
                  </div>
                </div>
              </div>
              <div className="about_us_container_content_people_person">
                <div className="about_us_container_content_people_person_info">
                  <div className="about_us_container_content_people_person_info_image">
                    <img src={bgImage3} className="circle" />
                    <img src={person3} className="img img3" />
                  </div>
                  <div className="about_us_container_content_people_person_info_devider"></div>
                  <div className="about_us_container_content_people_person_info_name">
                    Name
                  </div>
                  <div className="about_us_container_content_people_person_info_title">
                    Title
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
