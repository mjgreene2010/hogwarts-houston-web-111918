import React, { Component } from "react";

export default class HogFront extends Component {
  render() {
    return (
      <div className="ui eight wide column">
        {this.props.hog.name}
        <img src={this.props.hog.image} alt={this.props.hog.name} />
      </div>
    );
  }
}
