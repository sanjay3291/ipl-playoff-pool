import React, { Component } from "react";
import "./bioPage.scss";

class BioPage extends Component {
  state = {};
  render() {
    return (
      <div class="container">
        <blockquote class="oval-thought-border">
          <p>
            Hello, Thanks for visiting the site.<br />
            <br />
            A bit about me, I'm Sanjay, Controls Engineer at Virgin Hyperloop, ardent fan, avid watcher and amateur player of cricket.<br />
            <br />
            I've seen a lot of pool competitions for other sports leagues like NFL, EPL and NBA. I always felt that it would be fun if we have something similar with Cricket.<br />
            <br />
            So I decided to develop one for Cricket and what better league to start with than the IPL.<br />
            <br />
            The goal of the whole thing is to create a friendly competition that you can enjoy with your buddies.<br />
            <br />
            Hope you have fun!!
          </p>
        </blockquote>
      </div>
    );
  }
}

export default BioPage;
