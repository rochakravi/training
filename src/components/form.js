import React, { Component } from "react";
//import Card from "./ui-kit/card";

class Form extends Component {
  state = {
    name: "ravi",
  };
  changeState = () => {
    this.setState({
      name: "ravi",
    });
  };
  shouldComponentUpdate() {
    alert("should component update");
    return true;
  }
  render() {
    function myfunction() {
      alert("Your form has been submitted!");
    }

    return (
      <div>
        <h6>
          state - <span>{this.state.name}</span>
        </h6>

        <button onClick={() => this.changeState()}>Change State</button>
        {/* <Card></Card> */}
        <form>
          <h1 style={{ backgroundcColor: "#330000" }}>
            Enter your details for React Training
          </h1>
          <p>Name:</p>
          <input type="text" />
          <p>Experience:</p>
          <input type="text" />
          <p>Contact No:</p>
          <input type="text" />
          <p>Email Id:</p>
          <input type="text" />
          <p>
            <button onClick={myfunction}>Submit</button>
          </p>
        </form>
      </div>
    );
  }
}

export default Form;
