import React, { Component } from "react";

class RegisterPost extends Component {
  state = {};
  render() {
    return (
      <div
        className="container-fluid mt-5 p-5"
        style={{
          backgroundColor: "#add8e6",
        }}
      >
        <div class="container">
          <blockquote class="oval-thought-border">
            <p>
              Uh-Oh, The registration window for this years competition is
              closed. Please visit this site before next year's competition to
              participate.
            </p>
          </blockquote>
        </div>
      </div>
    );
  }
}

export default RegisterPost;
