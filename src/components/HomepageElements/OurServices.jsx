import React from "react";

import palletizationImg from "../../media/images/palletization.jpg";
import cellImg from "../../media/images/cell.jpg";
import gripperImg from "../../media/images/gripper.jpg";
import robot_bendingImg from "../../media/images/robot_bending.jpg";
import millingImg from "../../media/images/milling.png";
import packagingImg from "../../media/images/packaging.avif";
import consultingImg from "../../media/images/consulting.jpg";
import educationImg from "../../media/images/education.jpg";
import maintenanceImg from "../../media/images/maintenance.jpg";

function OurServices() {
  return (
    <div id="ourServices">
      <div className="our_services">
        <div className="our_services_container">
          <div className="our_services_container_content container">
            <div className="our_services_container_content_title">
              Our Services
            </div>
            <div className="our_services_container_content_gallery">
              <div className="our_services_container_content_gallery_item">
                <a
                  href="/services/#palletization"
                  className="portfolio-link"
                  data-toggle="modal"
                >
                  <img
                    src={palletizationImg}
                    className="img-responsive"
                    alt="palletization image"
                  />
                </a>
                <div className="our_services_container_content_gallery_item_caption">
                  <div className="our_services_container_content_gallery_item_caption_title">
                    Palletization
                  </div>
                </div>
              </div>

              <div className="our_services_container_content_gallery_item">
                <a href="/services/#metalForming" className="portfolio-link" data-toggle="modal">
                  <img
                    src={robot_bendingImg}
                    className="img-responsive"
                    alt="metal forming image"
                  />
                </a>
                <div className="our_services_container_content_gallery_item_caption">
                  <div className="our_services_container_content_gallery_item_caption_title">
                    Bending
                  </div>
                </div>
              </div>

              <div className="our_services_container_content_gallery_item">
                <a href="/services/#customGrippersAndTools" className="portfolio-link" data-toggle="modal">
                  <img src={gripperImg} className="img-responsive" alt="gripper image" />
                </a>
                <div className="our_services_container_content_gallery_item_caption">
                  <div className="our_services_container_content_gallery_item_caption_title">
                    Custom Grippers
                  </div>
                </div>
              </div>

              <div className="our_services_container_content_gallery_item">
                <a href="/services/#customCells" className="portfolio-link" data-toggle="modal">
                  <img src={cellImg} className="img-responsive" alt="cell image" />
                </a>
                <div className="our_services_container_content_gallery_item_caption">
                  <div className="our_services_container_content_gallery_item_caption_title">
                    Custom Cells
                  </div>
                </div>
              </div>

              <div className="our_services_container_content_gallery_item">
                <a href="/services/#packing" className="portfolio-link" data-toggle="modal">
                  <img src={packagingImg} className="img-responsive" alt="packing image" />
                </a>
                <div className="our_services_container_content_gallery_item_caption">
                  <div className="our_services_container_content_gallery_item_caption_title">
                    Packing
                  </div>
                </div>
              </div>

              <div className="our_services_container_content_gallery_item">
                <a href="/services/#milling" className="portfolio-link" data-toggle="modal">
                  <img src={millingImg} className="img-responsive" alt="milling image" />
                </a>
                <div className="our_services_container_content_gallery_item_caption">
                  <div className="our_services_container_content_gallery_item_caption_title">
                    Milling
                  </div>
                </div>
              </div>

              <div className="our_services_container_content_gallery_item smaller">
                <a href="/services/#consulting" className="portfolio-link" data-toggle="modal">
                  <img src={consultingImg} className="img-responsive" alt="consulting image" />
                </a>
                <div className="our_services_container_content_gallery_item_caption">
                  <div className="our_services_container_content_gallery_item_caption_title">
                    Consulting
                  </div>
                </div>
              </div>

              <div className="our_services_container_content_gallery_item smaller">
                <a href="/services/#education" className="portfolio-link" data-toggle="modal">
                  <img src={educationImg} className="img-responsive" alt="education image" />
                </a>
                <div className="our_services_container_content_gallery_item_caption">
                  <div className="our_services_container_content_gallery_item_caption_title">
                    Education
                  </div>
                </div>
              </div>

              <div className="our_services_container_content_gallery_item smaller">
                <a href="/services/#maintenance" className="portfolio-link" data-toggle="modal">
                  <img src={maintenanceImg} className="img-responsive" alt="maintenance image" />
                </a>
                <div className="our_services_container_content_gallery_item_caption">
                  <div className="our_services_container_content_gallery_item_caption_title">
                    Maintenance
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

export default OurServices;
