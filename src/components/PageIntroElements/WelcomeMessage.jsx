import React, { useEffect, useRef } from "react";

function WelcomeMessage() {
  const welcomeMsg = useRef(null);
  const CHAR_TIME = 50;

  useEffect(() => {
    let text, index;
    const title = welcomeMsg.current;

    function requestCharAnimation(char, value) {
      setTimeout(function () {
        char.textContent = value;
        char.classList.add("fade_in");
      }, CHAR_TIME);
    }

    function addChar() {
      const char = document.createElement("span");
      char.classList.add("char");
      char.textContent = "▌";
      title.appendChild(char);
      requestCharAnimation(char, text.substr(index++, 1));
      if (index < text.length) {
        requestChar();
      }
      else if (index==text.length){
        document.getElementById("proceedButton").classList.add("animateShow");
      }
    }

    function requestChar(delay = 0) {
      setTimeout(addChar, CHAR_TIME + delay);
    }

    function startMessageAnimation() {
      index = 0;
      text = title.textContent.trim();
      title.textContent = "";
      requestChar(1000);
    }

    startMessageAnimation();
  }, []);

  return (
    <div className="welcome_message">
      <div className="welcome_message_content" ref={welcomeMsg}>
        Welcome to Full Auto Solutions
      </div>
    </div>
  );
}

export default WelcomeMessage;
