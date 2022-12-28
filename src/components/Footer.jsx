import React from "react";
import '../css/compiled/Footer.css'

function Footer() {
  return (
    <div id="footer">
      <div className="footer_content">
        <div className="footer_content_navigation">
          <div className="footer_content_navigation_item">HomePage</div>
          <div className="footer_content_navigation_item">About Us</div>
          <div className="footer_content_navigation_item">Services</div>
          <div className="footer_content_navigation_item">How We Do It</div>
          <div className="footer_content_navigation_item">Contact</div>
        </div>
        <div className="footer_content_copyright">
          Copyright &copy;autosolutions 2022. All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
