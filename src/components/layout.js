import React from "react";

import Header from "./header";
import CoverImage from "./cover-image";
import Introduction from "./introduction";
import Skills from "./skills";

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <div className="body">
          <CoverImage />
          <Introduction />
          <Skills />
        </div>
      </div>
    );
  }
}
