import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as styles from "../../components/design.module.css";
const Header = (props) => {
  return (
    <div className={styles.header}>
      <Link to="home">
        <span className={styles.link}>Home</span>
      </Link>
      <Link to="quote">
        <span className={styles.link}>Quotation</span>
      </Link>
    </div>
  );
};

export default Header;
