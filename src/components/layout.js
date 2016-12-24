import React from "react";

import Header from "./header";
import CoverImage from "./cover-image";

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <CoverImage />
      </div>
    );
  }
}
