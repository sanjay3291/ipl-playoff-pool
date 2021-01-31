import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import axios from "axios";
import Navbar from "./components/navBar/navBar";
import Routes from "./Routes";

class App extends Component {
  state = {
    response: {},
  };

  componentDidMount() {
    axios.get("/sayHello").then((res) => {
      const response = res.data;
      this.setState({ response });
      console.log(response);
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
