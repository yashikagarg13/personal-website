import R from "ramda";
import React from "react";
import ExperienceData from "../data/experience";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="container text-center">
        <i className="fa fa-suitcase margin-right-xs lg primary text" aria-hidden="true"></i>
        <span className="lg uppercase bold text">Experience</span>
        <div className="box">
          {R.map(item =>
            <div className="experience-block">
              <a href={item.companyUrl} target="_blank" className="title">{item.companyName}</a>
              <div className="sub-title">{item.position} | {item.timePeriod}</div>
              <div className="description" dangerouslySetInnerHTML={{ __html: item.role }}></div>
              <ul className="list">
                {R.map(technology =>
                  <li key={`technology-${technology}`} className="list-item">{technology}</li>,
                item.technologies)}
              </ul>
            </div>,
          ExperienceData)}
        </div>
      </div>
    </div>
  );
};

export default Experience;
