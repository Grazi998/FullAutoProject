import React from "react";

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
                    <img src="src\media\images\AboutUs\bg3.png" className="circle" />
                    <img src="src\media\images\AboutUs\woman1.png" className="img img1" />
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
                    <img src="src\media\images\AboutUs\bg2.png" className="circle" />
                    <img src="src\media\images\AboutUs\woman.png" className="img img2" />
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
                    <img src="src\media\images\AboutUs\bg1.png" className="circle" />
                    <img src="src\media\images\AboutUs\man.png" className="img img3" />
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
