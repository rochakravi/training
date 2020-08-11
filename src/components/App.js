import React, { Component } from "react";
//import './design.css';
import styles from './mystyle.module.css';
import Form from './form';

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
    return (
      <div className={styles.bigblue}>
        <Form></Form>
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
