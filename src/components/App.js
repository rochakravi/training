import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AngTraining from "./screens/ang-training";
import ReactTraining from "./screens/react-training";
import Card from "./ui-kit/card";
import styles from "./design.module.css";
import Footer from "./functional/footer";
import Form from "./form";

import { ThemeContext, themes } from "./ui-kit/theme-context";
import ThemedButton from "./ui-kit/themed-button";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className={styles.navcontainer}>
            <Link to="/react">
              <Card title="React" content="lets check the contents" />
            </Link>
            <Link to="/angular">
              <Card title="Angular" content="lets check the contents" />
            </Link>
            <Link to="">
              <Card title="React Native" content="lets check the contents" />
            </Link>
            <Link to="form">
              <Card title="Spring Boot" content="lets check the contents" />
            </Link>
          </div>
          <div className={styles.contentcontainer}>
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
          </div>
          <div className={styles.footer}>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
