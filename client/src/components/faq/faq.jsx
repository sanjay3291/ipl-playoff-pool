import React, { Component } from "react";
import "./faq.scss";
import data from "./faq_data.json";
import Question from "./question/question";

class faq extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <div ref={this.props.refProp} className="faqHeader">{data.title}</div>
        <div id="main">
          <div className="container-fluid">
            <div className="accordion" id="faq">
              <Question
                title={data.rows[0].title}
                content={data.rows[0].content}
                headid="faqhead1"
                dataid="faq1"
              />
              <Question
                title={data.rows[1].title}
                content={data.rows[1].content}
                headid="faqhead2"
                dataid="faq2"
              />
              <Question
                title={data.rows[2].title}
                content={data.rows[2].content}
                headid="faqhead3"
                dataid="faq3"
              />
              <Question
                title={data.rows[3].title}
                content={data.rows[3].content}
                headid="faqhead4"
                dataid="faq4"
              />
              <Question
                title={data.rows[4].title}
                content={data.rows[4].content}
                headid="faqhead5"
                dataid="faq5"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default faq;
