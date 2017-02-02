import React from "react";

import Constants from "../helpers/constants";
import FindMeAt from "./common/find-me-at";


const Footer = () => {
  const currentDate = new Date();
  return (
    <div id="footer" className="footer">
      <div className="container">
        <div className="pull-left text-left">
          <div className="lg underlined text">Yashika Garg</div>
          <div className="sm dark-vimp text">{Constants.position}</div>
          <div className="sm dark-imp text">Created by Yashika Garg</div>
          <div className="xs dark-nimp text margin-top-sm">Copyright <i className="fa fa-copyright"></i> Yashika Garg {currentDate.getFullYear()}</div>
        </div>

        <div className="pull-right text-left">
          <div className="md dark-vimp bold text margin-bottom-xs">Find me at</div>
          <FindMeAt />
        </div>
      </div>
    </div>
  );
};

export default Footer;
