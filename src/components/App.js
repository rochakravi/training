import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AngTraining from "./screens/ang-training";
import ReactTraining from "./screens/react-training";
import Card from "./ui-kit/card";
import styles from "./design.module.css";
import Footer from "./functional/footer";
import Form from "./form";
import styled from "styled-components";

import { ThemeContext, themes } from "./ui-kit/theme-context";
import ThemedButton from "./ui-kit/themed-button";
import Popup from "./ui-kit/popup";

const Model = styled.div`
 {this.state.isClose ? display: block : display : none}
  // display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 80px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;
const Content = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  margin-bottom: 200px;
`;
const Close = styled.span`
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

class App extends Component {
  state = {
    isClose: false,
  };
  toggle = () => {
    this.setState({ isClose: !this.state.isClose });
  };
  render() {
    return (
      <Router>
        <div>
          <div className={styles.navcontainer}>
            <Link to="/react" onClick={this.toggle}>
              <Card
                title="React"
                content="lets check the contents"
                toggleHandler={this.toggle}
              />
            </Link>
            <Link to="/angular">
              <Card
                title="Angular"
                content="lets check the contents"
                toggleHandler={this.toggle}
              />
            </Link>
            <Link to="">
              <Card
                title="React Native"
                content="lets check the contents"
                toggleHandler={this.toggle}
              />
            </Link>
            <Link to="form">
              <Card
                title="Spring Boot"
                content="lets check the contents"
                toggleHandler={this.toggle}
              />
            </Link>
          </div>
          {this.state.isClose ? (
            <Model>
              <Content>
                <Close onClick={this.toggle}>X</Close>
                <Switch>
                  <Route path="/react">
                    <ReactTraining />
                  </Route>
                  <Route path="/angular">
                    <AngTraining />
                  </Route>
                  <Route path="/form">
                    <Form />
                  </Route>
                </Switch>
              </Content>
            </Model>
          ) : null}

          <div className={styles.footer}>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
