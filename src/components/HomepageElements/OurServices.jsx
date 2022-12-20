import React from "react";

import palletizationImg from '../../media/images/palletization.jpg';
import cellImg from '../../media/images/cell.jpg';
import gripperImg from '../../media/images/gripper.jpg';
import robot_bendingImg from '../../media/images/robot_bending.jpg';
import millingImg from '../../media/images/milling.png';
import packagingImg from '../../media/images/packaging.avif';



function OurServices() {
  return (
    <div id="ourServices">
      <div className="our_services">
        <div className="our_services_container">
          <div className="our_services_container_content container">
            <div className="our_services_container_content_title">
              Our Services
            </div>
            {/* <div className="our_services_container_content_subtitle">
              Below you'll find some of our services.
            </div> */}
            <div className="our_services_container_content_gallery">
              <div className="our_services_container_content_gallery_item">
                <a
                  href=""
                  target="_blank"
                  className="portfolio-link"
                  data-toggle="modal"
                >
                  <img
                    src={palletizationImg}
                    className="img-responsive"
                    alt=""
                  />
                </a>
                <div className="our_services_container_content_gallery_item_caption">
                  <div className="our_services_container_content_gallery_item_caption_title">Palletization</div>
                </div>
              </div>

              <div className="our_services_container_content_gallery_item">
                <a
                  href=""
                  className="portfolio-link"
                  target="_blank"
                  data-toggle="modal"
                >
                  <img
                    src={robot_bendingImg}
                    className="img-responsive"
                    alt=""
                  />
                </a>
                <div className="our_services_container_content_gallery_item_caption">
                  <div className="our_services_container_content_gallery_item_caption_title">Bending</div>
                </div>
              </div>

              <div className="our_services_container_content_gallery_item">
                <a
                  href=""
                  target="_blank"
                  className="portfolio-link"
                  data-toggle="modal"
                >

                  <img
                    src={gripperImg}
                    className="img-responsive"
                    alt=""
                  />
                </a>
                <div className="our_services_container_content_gallery_item_caption">
                  <div className="our_services_container_content_gallery_item_caption_title">Custom Grippers</div>
                </div>
              </div>

              <div className="our_services_container_content_gallery_item">
                <a
                  href=""
                  target="_blank"
                  className="portfolio-link"
                  data-toggle="modal"
                >
                  <img
                    src={cellImg}
                    className="img-responsive"
                    alt=""
                  />
                </a>
                <div className="our_services_container_content_gallery_item_caption">
                  <div className="our_services_container_content_gallery_item_caption_title">Custom Cells</div>
                </div>
              </div>

              <div className="our_services_container_content_gallery_item">
                <a
                  href=""
                  target="_blank"
                  className="portfolio-link"
                  data-toggle="modal"
                >
                  <img
                    src={packagingImg}
                    className="img-responsive"
                    alt=""
                  />
                </a>
                <div className="our_services_container_content_gallery_item_caption">
                  <div className="our_services_container_content_gallery_item_caption_title">Packaging</div>
                </div>
              </div>

              <div className="our_services_container_content_gallery_item">
                <a
                  href=""
                  target="_blank"
                  className="portfolio-link"
                  data-toggle="modal"
                >
                  <img
                    src={millingImg}
                    className="img-responsive"
                    alt=""
                  />
                </a>
                <div className="our_services_container_content_gallery_item_caption">
                  <div className="our_services_container_content_gallery_item_caption_title">Milling</div>
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
