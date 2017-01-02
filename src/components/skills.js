import R from "ramda";
import React from "react";
import SkillsData from "../data/skills";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <div className="container text-center">
        <i className="fa fa-star margin-right-xs lg primary text" aria-hidden="true"></i>
        <span className="lg uppercase bold text">Skills</span>
        <div className="box">
          {R.map(key =>
            <div key={`skills-${key}`}>
              <caption className="list-caption">{key}</caption>
              <ul className="list">
                {R.map(item => <li key={`skills-${item}`} className="list-item">{item}</li>, SkillsData[key])}
              </ul>
            </div>,
          R.keys(SkillsData))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
