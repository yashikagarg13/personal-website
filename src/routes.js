import React from "react";
import {Router, Route, browserHistory} from "react-router";

import Layout from "./components/layout";
const history = browserHistory;

const getRoutes = () => (
  <Route path="/" component={Layout}>
  </Route>
);

export default class App extends React.Component {
  render () {
    return (
      <Router history={history}>
        {getRoutes()}
      </Router>
    );
  }
}

export {getRoutes, history};
