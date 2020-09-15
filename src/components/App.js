import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AngTraining from "./screens/ang-training";
import ReactTraining from "./screens/react-training";
import Card from "./ui-kit/card";
import styles from "./design.module.css";
import Footer from "./functional/footer";
import Header from "./functional/header";
import Form from "./form";
import BookForm from "./bookForm";
import User from "./screens/user";
import styled from "styled-components";
import * as firebase from "firebase/app";
import { auth, createUserProfileDocument } from "./../firebase/firebase.util";
import SpringBoot from "./screens/spring-boot";
import JavaFullStack from "./screens/javaFullStack";
import Java from "./screens/java";

const Model = styled.div`
  display: block; /* Hidden by default */
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
  constructor() {
    super();
    this.state = {
      isClose: false,
      currentUser: null,
    };
  }
  // componentDidMount() {
  //   auth.onAuthStateChanged((user) => {
  //     this.setState({ currentUser: user });
  //     console.log(user);
  //   });
  // }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          console.log(" => ", snapShot.data());
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => {
              console.log("state => ", this.state);
            }
          );
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    alert("unmounting");
    this.unsubscribeFromAuth();
  }
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
            <Link to="book">
              <Card
                title="React Native"
                content="lets check the contents"
                toggleHandler={this.toggle}
              />
            </Link>
            <Link to="java">
              <Card
                title="Java"
                content="lets check the contents"
                toggleHandler={this.toggle}
              />
            </Link>
            <Link to="springboot">
              <Card
                title="Spring Boot"
                content="lets check the contents"
                toggleHandler={this.toggle}
              />
            </Link>
            <Link to="jFullStack">
              <Card
                title="Java Full Stack"
                content="lets check the contents"
                toggleHandler={this.toggle}
              />
            </Link>
            {/* <Link to="Java Full Stack">
              <Card
                title="User"
                content="lets check the contents"
                toggleHandler={this.toggle}
              />
            </Link> */}
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
                  <Route path="/java">
                    <Java />
                  </Route>
                  <Route path="/springboot">
                    <SpringBoot />
                  </Route>
                  <Route path="/jFullStack">
                    <JavaFullStack />
                  </Route>

                  <Route path="/form">
                    <Form />
                  </Route>
                  <Route path="/book">
                    <BookForm />
                  </Route>
                  <Route path="/user">
                    <User user={this.state.currentUser} />
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
