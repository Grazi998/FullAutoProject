import React from "react";

function ServiceCard({imageSource, cardTitle, cardDescription}) {
  return (
    <div className="services_section_card reverse">
      <div className="services_section_card_image_side">
        <img
          src={imageSource}
          alt="content card image"
          width="300"
          height="500"
        />
      </div>
      <div className="services_section_card_text_side">
      <div className="services_section_card_text_side_title">{cardTitle}</div>
      <div className="services_section_card_text_side_description">{cardDescription}</div>
      </div>
    </div>
  );
}

export default ServiceCard;
