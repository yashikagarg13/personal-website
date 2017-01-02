import React from "react";
import {Link} from "react-router";

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
                <li>
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                    aria-haspopup="true" aria-expanded="false">About <span className="caret"></span></a>
                  <ul className="dropdown-menu md text">
                    <li><Link to="/#introduction">Introduction</Link></li>
                    <li><Link to="/#skills">Skills</Link></li>
                    <li><Link to="/#eductaion">Education</Link></li>
                    <li><Link to="/#experience">Experience</Link></li>
                    <li><Link to="/#interests">Interests</Link></li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                    aria-haspopup="true" aria-expanded="false">Work <span className="caret"></span></a>
                  <ul className="dropdown-menu md text">
                    <li><Link to="/#projects">Projects</Link></li>
                    <li><Link to="/#blogs">Blogs</Link></li>
                    <li><Link to="/#video">Videos</Link></li>
                  </ul>
                </li>
                <li><Link to="/#contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
