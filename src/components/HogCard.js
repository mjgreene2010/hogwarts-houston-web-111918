import React, { Component } from "react";
import HogFront from "./HogFront";
import HogDetails from "./HogDetails";

export default class HogCard extends Component {
  state = {
    onClick: false
  };
  render() {
    return (
      <div>
        <div
          className="hog-card"
          onClick={() => this.setState({ onClick: !this.state.onClick })}
        >
          {this.state.onClick ? (
            <div>
              <HogFront hog={this.props.hog} />
              <HogDetails
                hog={this.props.hog}
                // handleGreased={this.props.handleGreased}
              />
            </div>
          ) : (
            <div>
              <HogFront hog={this.props.hog} />
            </div>
          )}
        </div>
      </div>
    );
  }
}
