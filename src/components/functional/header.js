import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div>
      <Link to="user">
        <span>SignIn</span>
      </Link>
    </div>
  );
};

export default Header;
