import React, {PropTypes} from "react";

import Blogs from "./blogs";
import CoverImage from "./cover-image";
import Education from "./education";
import Experience from "./experience";
import Header from "./header";
import Introduction from "./introduction";
import Interests from "./interests";
import Projects from "./projects";
import Skills from "./skills";

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
          <Introduction />
          <Skills />
          <Education />
          <Experience />
          <Interests />
          <Projects />
          <Blogs />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.object,
};
