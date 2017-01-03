import R from "ramda";
import React from "react";
import InterestsData from "../data/interests";

const Interests = () => {
  return (
    <div id="interests" className="interests">
      <div className="container text-center">
        <i className="fa fa-heart margin-right-xs lg primary text" aria-hidden="true"></i>
        <span className="lg uppercase bold text">Interests</span>
        <div className="box clearfix">
          {R.map(item =>
            <div className="interest-block">
              <i className="material-icons xxlg text">{item.icon}</i>
              <p className="bold text margin-top-xs">{item.title}</p>
            </div>,
          InterestsData)}
        </div>
      </div>
    </div>
  );
};

export default Interests;
