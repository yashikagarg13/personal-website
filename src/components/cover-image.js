import React from "react";

import Constants from "../helpers/constants";

const CoverImage = () => {
  return (
    <div className="cover-image">
      <div className="container">
        <div className="overlay">
          <span className="sm text">Explore my skills and accomplishments</span>
          <h2 className="nomargin-bottom">{Constants.position}</h2>
        </div>
      </div>
    </div>
  );
};

export default CoverImage;
