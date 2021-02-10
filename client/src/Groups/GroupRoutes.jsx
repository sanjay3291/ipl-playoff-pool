import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";


import GroupName from "./GroupName";
import history from "./history";

class GroupRoutes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route
            path="/Groups/:groupName"
            render={(props) => <GroupName {...props} />}
          />
        </Switch>
      </Router>
    );
  }
}

export default GroupRoutes;
