import React, {PropTypes} from "react";

import Blog from "./blog";
import CoverImage from "./cover-image";
import Education from "./education";
import Experience from "./experience";
import Footer from "./footer";
import Header from "./header";
import About from "./about";
import Interests from "./interests";
import Projects from "./projects";
import Skills from "./skills";
import Videos from "./videos";

export default class App extends React.Component {
  componentDidUpdate() {
    const hash = this.props.location.hash;
    $("html, body").animate({
      scrollTop: $(hash).offset().top - 48,
    }, "slow");
  }

  render () {
    return (
      <div>
        <Header />
        <div className="body">
          <CoverImage />
          <About />
          <Skills />
          <Interests />
          <Experience />
          <Education />
          <Projects />
          <Blog />
          <Videos />
          <Footer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.object,
};
