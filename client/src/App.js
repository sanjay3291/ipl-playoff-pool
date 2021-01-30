import React, { Component } from "react";
import "./App.css";
//import axios from "axios";
import Navbar from "./components/navBar/navBar";
import HeaderSpace from "./components/headerSpace/headerSpace";
import FAQ from "./components/faq/faq";

class App extends Component {
  /*state = {
    response: {}
  };
  
  componentDidMount() {
    axios.get('/api/v1/say-something').then((res) => {
      const response = res.data;
      this.setState({response});
    });
  }*/

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }


  scrollToFAQ = () => this.myRef.current.scrollIntoView();

  render() {
    return (
      <div className="App">
        <Navbar />
        <HeaderSpace scroll={this.scrollToFAQ} />
        <FAQ refProp={this.myRef} />
      </div>
    );
  }
}

export default App;
