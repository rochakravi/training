import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as styles from "../../components/design.module.css";

import AngTraining from "./../screens/ang-training";
import ReactTraining from "./../screens/react-training";

import SpringBoot from "./../screens/spring-boot";
import JavaFullStack from "./../screens/javaFullStack";
import Java from "./../screens/java";
import Trainee from "./../trainee/Trainee";

const Routes = (props) => {
  return (
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
      <Route path="/spring-boot">
        <SpringBoot />
      </Route>
      <Route path="/full-stack">
        <JavaFullStack />
      </Route>

      <Route path="/trainee">
        <Trainee />
      </Route>
    </Switch>
  );
};

export default Routes;
