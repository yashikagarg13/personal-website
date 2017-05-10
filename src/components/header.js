import React from "react";
import {Link} from "react-router";

import Constants from "../helpers/constants";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="clearfix">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed"
                data-toggle="collapse" data-target="#items" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Yashika Garg | Portfolio</a>
            </div>

            <div className="collapse navbar-collapse" id="items">
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/#about">About</Link></li>
                <li><Link to="/#projects">Projects</Link></li>
                <li><a href={Constants.blogLink} target="_blank">Blog
                  <i className="fa fa-external-link xs text margin-left-xs" aria-hidden="true"></i></a></li>
                <li><a href={Constants.youtubeLink} target="_blank">Videos
                  <i className="fa fa-external-link xs text margin-left-xs" aria-hidden="true"></i></a></li>
                <li>
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                    aria-haspopup="true" aria-expanded="false">Background <span className="caret"></span></a>
                  <ul className="dropdown-menu md text">
                    <li><Link to="/#experience">Experience</Link></li>
                    <li><Link to="/#education">Education</Link></li>
                    <li><Link to="/#interests">Interests</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
