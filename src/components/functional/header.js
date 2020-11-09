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
      <Link to="/react">Java Script</Link>
      <Link to="/react">Angular</Link>
      <Link to="/react">React</Link>
      <Link to="/react">React Native</Link>
      <Link to="/react">Java</Link>
      <Link to="/react">Spring boot</Link>
      <Link to="/react">Java full stack</Link>

      <Link to="quote">
        <span className={styles.link}>Trainee</span>
      </Link>
    </div>
  );
};

export default Header;
