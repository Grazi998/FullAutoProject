import React, { useEffect } from "react";
import "../css/compiled/Services.css";
import ServiceCard from "./OurServicesElements/ServiceCard";

import CardContents from "./OurServicesElements/content.json";

import palletizationImg from "../media/images/palletization.jpg";
import cellImg from "../media/images/cell.jpg";
import gripperImg from "../media/images/gripper.jpg";
import robot_bendingImg from "../media/images/robot_bending.jpg";
import millingImg from "../media/images/milling.png";
import packagingImg from "../media/images/packaging.avif";
import consultingImg from "../media/images/consulting.jpg";
import educationImg from "../media/images/education.jpg";
import maintenanceImg from "../media/images/maintenance.jpg";

function Services() {
  const url = window.location.href.split("#");

  if (url.length > 1) {
    const focusElementId = url.slice(-1)[0];
    useEffect(() => {
      document.getElementById(focusElementId).focus();
    });
  }

  return (
    <div id="services">
        <div className="services_hero">
          <div className="services_hero_title">~ Services ~</div>
          <div className="services_hero_text">
            We are offering services in the field of industrial robotics and
            automation. Our company specializes in complete creation of custom
            made robotic cells which includes robots, conveyers, grippers and
            tools as well as electro installations. These type of cells can be
            used to improve industrial processes like palletization, metal
            forming, packing and milling.
            <br />
            <br />
            Service includes complete project execution, from planning to delivery and commisioning as well as education of factory staff for manipulation and maintenance of equipment.
          </div>
        </div>
      <div className="services container">
        <section id="palletization" className="services_section" tabIndex={-1}>
          <ServiceCard
            imageSource={palletizationImg}
            cardTitle={CardContents.title.palletization}
            cardDescription={CardContents.description.palletization}
          />
        </section>
        <section id="metalForming" className="services_section" tabIndex={-1}>
          <ServiceCard
            imageSource={robot_bendingImg}
            cardTitle={CardContents.title.metalForming}
            cardDescription={CardContents.description.metalForming}
          />
        </section>
        <section
          id="customGrippersAndTools"
          className="services_section"
          tabIndex={-1}
        >
          <ServiceCard
            imageSource={gripperImg}
            cardTitle={CardContents.title.customGrippers}
            cardDescription={CardContents.description.customGrippers}
          />
        </section>
        <section id="customCells" className="services_section" tabIndex={-1}>
          <ServiceCard
            imageSource={cellImg}
            cardTitle={CardContents.title.customCells}
            cardDescription={CardContents.description.customCells}
          />
        </section>
        <section id="packing" className="services_section" tabIndex={-1}>
          <ServiceCard
            imageSource={packagingImg}
            cardTitle={CardContents.title.packing}
            cardDescription={CardContents.description.packing}
          />
        </section>
        <section id="milling" className="services_section" tabIndex={-1}>
          <ServiceCard
            imageSource={millingImg}
            cardTitle={CardContents.title.milling}
            cardDescription={CardContents.description.milling}
          />
        </section>
        <section id="consulting" className="services_section" tabIndex={-1}>
          <ServiceCard
            imageSource={consultingImg}
            cardTitle={CardContents.title.consulting}
            cardDescription={CardContents.description.consulting}
          />
        </section>
        <section id="education" className="services_section" tabIndex={-1}>
          <ServiceCard
            imageSource={educationImg}
            cardTitle={CardContents.title.education}
            cardDescription={CardContents.description.education}
          />
        </section>
        <section id="maintenance" className="services_section" tabIndex={-1}>
          <ServiceCard
            imageSource={maintenanceImg}
            cardTitle={CardContents.title.maintenance}
            cardDescription={CardContents.description.maintenance}
          />
        </section>
      </div>
    </div>
  );
}

export default Services;
