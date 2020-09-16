import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as styles from "../../components/design.module.css";
const Header = (props) => {
  return (
    <>
      <div className={styles.header}>
        <Link to="home">
          <span className={styles.link}>Home</span>
        </Link>
        <Link to="home">
          <span className={styles.link}>Categories</span>
        </Link>
        <Link to="trainee">
          <span className={styles.link}>Trainee</span>
        </Link>
      </div>
      <div className={styles.subHeader}>
        <Link to="react">
          <span className={styles.link}>React</span>
        </Link>
        <Link to="react-native">
          <span className={styles.link}>React Native</span>
        </Link>
        <Link to="angular">
          <span className={styles.link}>Angular</span>
        </Link>
        <Link to="java">
          <span className={styles.link}>Java</span>
        </Link>
        <Link to="spring-boot">
          <span className={styles.link}>Spring Boot</span>
        </Link>
        <Link to="full-stack">
          <span className={styles.link}>Full Stack</span>
        </Link>
      </div>
    </>
  );
};

export default Header;
