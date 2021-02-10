import React, { Component } from "react";

class Question extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <div className="card-header" id={this.props.headid}>
          <button
            className="btn btn-header-link collapsed"
            data-toggle="collapse"
            data-target={`#${this.props.dataid}`}
            aria-expanded="true"
            aria-controls={this.props.dataid}
            style={{ width:"100%", display:"block" }}
          >
            {this.props.title}
          </button>
        </div>

        <div
          id={this.props.dataid}
          className="collapse"
          aria-labelledby={this.props.headid}
          data-parent="#faq"
        >
          <div className="card-body">{this.props.content}</div>
        </div>
      </div>
    );
  }
}

export default Question;
