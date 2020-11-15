import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as styles from "../../components/design.module.css";
import Card from "./../ui-kit/card";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <Link to="home">
        <span className={styles.link}>Native Villagers</span>
      </Link>
      <Link to="/javascript">Java Script</Link>
      <Link to="/angular">Angular</Link>
      <Link to="/react">React</Link>
      <Link to="/reactnative">React Native</Link>
      <Link to="/java">Java</Link>
      <Link to="/springboot">Spring boot</Link>
      <Link to="/java-fullstack">Java full stack</Link>
      <Link to="/contacts">Contact</Link>

      <Link to="quote">
        <span className={styles.link}>Trainee</span>
      </Link>
    </div>
  );
};

export default Header;
