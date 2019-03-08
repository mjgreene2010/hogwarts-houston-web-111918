import React, { Component } from "react";
import HogCard from "./HogCard";

export default class HogIndex extends Component {
  state = {
    allHogs: []
  };

  componentDidMount = () => {
    fetch("http://localhost:3001/hogs")
      .then(res => res.json())
      .then(allHogs => this.setState({ allHogs }));
  };

  hogSortWithName = () => {
    let sorted = this.state.allHogs.sort((a, b) => {
      return a.name < b.name ? -1 : 1;
    });

    this.setState({
      allHogs: sorted
    });
  };

  hogSortWithWeight = () => {
    let sorted = this.state.allHogs.sort((a, b) => {
      return a.weight < b.weight ? -1 : 1;
    });

    this.setState({
      allHogs: sorted
    });
  };

  handleGreased = () => {
    let filtered = this.state.allHogs.filter(isGrease => {
      return isGrease.greased === true ? isGrease : isGrease && !isGrease;
    });
    this.setState({
      allHogs: filtered
    });
  };

  // handleHogDetail = (e) => {e.preventDefault();
  //   this.state.isClicked ? (isClicked = false) : (isClicked = true)
  //   this.setState({

  // }) };

  // hogDetail={this.state.handleHogDetail}

  render() {
    return (
      <div>
        {/* <p>
          <button onClick={() => this.hogSortWithName()}>Sort By Name</button>
        </p> */}
        <div style={{ paddingBottom: "15px" }}>
          <button onClick={() => this.hogSortWithName()}>Name</button>
          <button onClick={() => this.hogSortWithWeight()}>Weight</button>
          <button onClick={() => this.handleGreased()}>Greased? {}</button>
        </div>

        <div className="ui grid container">
          {this.state.allHogs.map(hog => {
            return <HogCard key={hog.id} hog={hog} />;
          })}
        </div>
      </div>
    );
  }
}
