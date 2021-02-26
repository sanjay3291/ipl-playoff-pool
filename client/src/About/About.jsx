import React, { Component } from "react";
import BioPage from "../components/bioPage/bioPage";

class About extends Component {
  state = {};
  render() {
    return (
      <div
        className="container-fluid mt-5 p-5"
        style={{
          backgroundColor: "#add8e6",
        }}
      >
        <BioPage />
      </div>
    );
  }
}

export default About;
