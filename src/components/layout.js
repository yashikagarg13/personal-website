import React, {PropTypes} from "react";

import Header from "./header";
import CoverImage from "./cover-image";
import Introduction from "./introduction";
import Interests from "./interests";
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
          <Interests />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.object,
};
