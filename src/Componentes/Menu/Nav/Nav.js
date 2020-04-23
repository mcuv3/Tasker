import React from "react";

import classes from "./Nav.css";

const Nav = () => {
  return (
    <div className={classes.Nav}>
      <ul>
        <li>Tasks</li>
        <li>About</li>
        <li>Profile</li>
      </ul>
    </div>
  );
};

export default Nav;
