import React, { Component } from "react";
import "./headerSpace.scss";


class HeaderSpace extends Component {
  state = {};


  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron bg-cover bg-overlay position-relative">
          <div className="container funky centered" aria-multiline="true">
            <h1 className="mb-3">IPL Playoff Pool</h1>
            <h2 className="mb-3">
              This is a fun competition to play among your friends to predict
              the playoff teams in this year's Indian premier league
            </h2>
            <div className="btn-group mt-5" role="group">
              <button
                className="btn btn-primary btn-lg  mr-2 ml-2"
                type="submit"
                id="mybuttons"
                onClick={() => this.props.scroll()}
              >
                Learn More
              </button>
              <button
                className="btn btn-primary btn-lg  mr-2 ml-2"
                type="submit"
                id="mybuttons"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderSpace;
