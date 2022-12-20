import React from "react";

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
                    src="src\media\images\palletization.jpg"
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
                    src="src\media\images\robot_bending.jpg"
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
                    src="src\media\images\gripper.jpg"
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
                    src="src\media\images\cell.jpg"
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
                    src="src\media\images\packaging.avif"
                    className="img-responsive"
                    alt=""
                  />
                </a>
                <div className="our_services_container_content_gallery_item_caption">
                  <div className="our_services_container_content_gallery_item_caption_title">packaging</div>
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
                    src="src\media\images\milling.png"
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
