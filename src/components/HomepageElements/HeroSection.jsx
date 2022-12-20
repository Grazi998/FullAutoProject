import React, { useEffect, useState } from "react";

function HeroSection() {
  const [showScroll, setShowScroll] = useState(true);

  window.onload = function () {
    document.addEventListener("scroll", function () {
      if (window.scrollY > 0) {
        setShowScroll(false);
      } else {
        setShowScroll(true);
      }
    });
  };

  return (
    <div id="heroSection">
      <div className="video_wrapper">
        <video autoPlay={true} loop muted>
          <source src={"src/media/videos/HeroBackground.mp4"} type="video/mp4"></source>
        </video>
      </div>
      <div className="hero">
        <div className="hero_container">
          <div className="hero_container_content">
            <div className="hero_container_content_main_title">
              FullAuto Solutions
            </div>
            <div className="hero_container_content_company_moto">
              We Are The Future
            </div>
            <hr className="hero_container_content_devider"></hr>
            <div className="hero_container_content_social">
              <div className="hero_container_content_social_button">
                <a href="https://www.facebook.com/" target="_blank">
                  <i className=""></i> <span className="">Facebook</span>
                </a>
              </div>
              <div className="hero_container_content_social_button">
                <a href="https://www.instagram.com" target="_blank">
                  <i className=""></i> <span className="">Instagram</span>
                </a>
              </div>
              <div className="hero_container_content_social_button">
                <a href="https://www.linkedin.com" target="_blank">
                  <i className=""></i> <span className="">LinkedIn</span>
                </a>
              </div>
            </div>
            <div
              id="heroScrollSign"
              className="hero_container_content_scroll_sign"
              style={{display : showScroll ? "flex": "none"}}
            >
              <div className="hero_container_content_scroll_sign_icon"></div>
              <div className="hero_container_content_scroll_sign_text">
                Scroll
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
