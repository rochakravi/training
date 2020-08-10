import React, { Component } from "react";
//import './design.css';
import styles from './mystyle.module.css';
class App extends Component {
  render() {
/*    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
      display: "inline-block",
      width: "350px",
      textalign: "center"
    };*/
    function myfunction() {
      alert("Your form has been submitted!");
    }
    return (
      <div className={styles.bigblue}>
        <form>
          <h1 style={{backgroundcColor: "#330000"}}>Enter your details for React Training</h1>
          <p>Name:</p>  
          <input
            type="text"
          />
          <p>Experience:</p>
          <input
            type="text"
          />
          <p>Contact No:</p> 
          <input
            type="text"
          />
          <p>Email Id:</p>  
          <input
            type="text"
          />
          <p><button onClick = {myfunction}>Submit</button></p>
        </form>
      </div>
    );
  }
}

export default App;

// 1. style

// 2 . style with const

// 4. className Style

// 4. className with external css

// 5. Styled-components =>

//props
