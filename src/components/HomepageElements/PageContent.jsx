import React from "react";
import OurServices from "./OurServices";

function PageContent() {
  return (
    <div id="pageContent">
      <div className="page_content">
        <div className="page_content_container">
          <div className="page_content_container_content container">

            <div className="page_content_container_content_section1">
              <div className="page_content_container_content_title">
                About Us
              </div>
              <div className="page_content_container_content_text">
                We are team of experienced engineers and technicians striving to
                optimize and automatize industrial production. Company connects
                mechanical engineering knowledge with robotics and automation by
                creating custom made solutions for each customer in order to
                reduce costs and increase throughput of their companies.
              </div>
            </div>

            <OurServices />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageContent;
