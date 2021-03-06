import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "./Home/Home";
//import Register from "./Register/Register";
import RegisterPost from "./Register/RegisterPost";
import Groups from "./Groups/Groups";
//import GroupsPre from "./Groups/GroupsPre";
import About from "./About/About";
import history from "./history";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/Register"
            render={(props) => <RegisterPost {...props} />}
          />
          <Route path="/Groups" render={(props) => <Groups {...props} />} />
          <Route path="/About" render={(props) => <About {...props} />} />
        </Switch>
      </Router>
    );
  }
}
