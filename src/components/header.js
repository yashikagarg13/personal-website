import React from "react";

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
                    <li><a href="#introduction">Introduction</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#eductaion">Education</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#interests">Interests</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                    aria-haspopup="true" aria-expanded="false">Work <span className="caret"></span></a>
                  <ul className="dropdown-menu md text">
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#blogs">Blogs</a></li>
                    <li><a href="#video">Videos</a></li>
                  </ul>
                </li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
