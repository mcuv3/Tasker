import React from "react";
import classes from "./Menu.css";
import Nav from "./Nav/Nav";

const Menu = () => {
  return (
    <div className={classes.Menu}>
      <h3>Tasker</h3>
      <Nav />
    </div>
  );
};

export default Menu;
