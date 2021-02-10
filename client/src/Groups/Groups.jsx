import React, { Component } from "react";
import PointsTable from "./../components/pointsTable/pointsTable";
import GroupRoutes from "./GroupRoutes";


class Groups extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid mt-5 p-5" style={{
        backgroundColor: "#add8e6",
      }}>
        <PointsTable/>
        <GroupRoutes />
      </div>
    );
  }
}

export default Groups;
