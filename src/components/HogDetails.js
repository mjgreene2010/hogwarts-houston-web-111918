import React, { Component } from "react";

export default class HogDetails extends Component {
  render() {
    return (
      <div className="ui eight wide column">
        <p>
          {this.props.hog.specialty}
          <br />
          {this.props.hog.weight}
          <br />
          {this.props.hog["highest medal achieved"]}
          <br />
          {`${this.props.hog.greased}`}
        </p>
        {/* <button
          onClick={() => this.props.handleGreased(this.props.hog.greased)}
        >
          {`${this.props.hog.greased}`}
        </button> */}
      </div>
    );
  }
}
