import React from "react";

function Newsletter() {
  return (
    <div id="newsletter">
      <div className="newsletter">
        <div className="newsletter_container container">
          <div className="newsletter_container_content">
            <div className="newsletter_container_content_left">
              <div className="newsletter_container_content_left_title">
                DID YOU LIKE WHAT WE STAND FOR AND WHAT WE OFFER?
              </div>
              <div className="newsletter_container_content_left_description">
                Follow our content and offers through the newsletter and get
                many benefits with each purchase!
              </div>
            </div>
            <div className="newsletter_container_content_right">
              <div className="newsletter_container_content_right_form">
                <div className="newsletter_container_content_right_form_email">
                  <input
                    id="newsletterEmail"
                    type="email"
                    placeholder="Input your e-mail address..."
                  />
                  <button>Subscribe</button>
                </div>
                <div className="newsletter_container_content_right_form_checkbox">
                  <input type="checkbox" id="newsletterCheckbox" />
                  <label htmlFor="newsletterCheckbox">
                    <svg viewBox="0,0,50,50">
                      <path d="M5 30 L 20 45 L 45 5"></path>
                    </svg>
                  </label>
                  <div className="newsletter_container_content_right_form_checkbox_label">
                  I agree to
                    our <a href="/terms-of-use" target={"_blank"}>Terms of Use</a> and our <a href="/privacy-policy" target={"_blank"}>Privacy Policy</a>.
                  </div>
                  {/* <label>
                    <input id="newsletterCheckbox" type="checkbox" />I agree to
                    the General Terms and Conditions of the Privacy Policy
                  </label> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
