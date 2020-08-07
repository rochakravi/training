import React, { Component } from "react";

class AngTraining extends Component {
  render() {
    return (
      <div>
        <p>React training</p>
        <p>{this.props.name}</p>
        <button>Test</button>
      </div>
    );
  }
}

export default AngTraining;
