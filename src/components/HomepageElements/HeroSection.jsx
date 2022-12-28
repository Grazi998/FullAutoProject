import React, { useEffect, useState } from "react";

import BGVideo from "../../media/videos/HeroBackground.mp4";

import FacebookIconSource from "../../media/images/Common/facebookLogo.png";
import InstagramIconSource from "../../media/images/Common/instagramLogo.png";
import LinkedInIconSource from "../../media/images/Common/linkedInLogo.png";

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
          <source src={BGVideo} type="video/mp4"></source>
        </video>
      </div>
      <div className="hero">
        <div className="hero_container">
          <div className="hero_container_content">
            <div className="hero_container_content_social">
              <div className="hero_container_content_social_button">
                <a href="https://www.facebook.com/" target="_blank">
                  <img
                    src={FacebookIconSource}
                    width="50"
                    height="50"
                    alt="Facebook Logo"
                  />
                </a>
              </div>
              <div className="hero_container_content_social_button">
                <a href="https://www.instagram.com" target="_blank">
                  <img
                    src={InstagramIconSource}
                    width="50"
                    height="50"
                    alt="Instagram Logo"
                  />
                </a>
              </div>
              <div className="hero_container_content_social_button">
                <a href="https://www.linkedin.com" target="_blank">
                  <img
                    src={LinkedInIconSource}
                    width="50"
                    height="50"
                    alt="LinkedIn Logo"
                  />
                </a>
              </div>
            </div>
            <div className="hero_container_content_main_title">
              FullAuto Solutions
            </div>
            <div className="hero_container_content_company_moto">
              We Are The Future
            </div>
            <div
              id="heroScrollSign"
              className="hero_container_content_scroll_sign"
              style={{ display: showScroll ? "flex" : "none" }}
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
