import React, { Component } from "react";
import FAQ from "../components/faq/faq";
import HeaderSpace from "../components/headerSpace/headerSpace";


class Home extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  scrollToFAQ = () => this.myRef.current.scrollIntoView();

  render() {
    return (
      <div>
        <HeaderSpace scroll={this.scrollToFAQ} />
        <FAQ refProp={this.myRef} />
      </div>
    );
  }
}

export default Home;
