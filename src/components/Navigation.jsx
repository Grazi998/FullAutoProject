import React from "react";
import "../css/compiled/Navigation.css";

function Navigation() {
  return (
    <div id="navigation">
      <div id="header-nav">
        <div className="nav_container">
          <div className="brand">
            <a href="mailto:info@fullautosolutions.com">
              info@fullautosolutions.com
            </a>
          </div>
          <a href="#menu" className="menu-link">
            <span className="bar1"></span>
            <span className="bar2"></span>
            <span className="bar3"></span>
          </a>

          <nav id="menu" role="navigation">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="how-we-do-it">How We Do It</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
