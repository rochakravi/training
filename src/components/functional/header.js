import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as styles from "../../components/design.module.css";
const Header = (props) => {
  return (
    <div className={styles.header}>
      <Link to="user">
        <span className={styles.link}>SignIn</span>
      </Link>
    </div>
  );
};

export default Header;
