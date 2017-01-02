import React from "react";

import Header from "./header";
import CoverImage from "./cover-image";
import Introduction from "./introduction";

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <div className="body">
          <CoverImage />
          <Introduction />
        </div>
      </div>
    );
  }
}
