import R from "ramda";
import React from "react";
import SkillsData from "../data/skills";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <span className="heading xs uppercase bold text">Skills</span>
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
  );
};

export default Skills;
