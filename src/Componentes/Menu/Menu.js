import React from "react";
import classes from "./Menu.css";
import Nav from "./Nav/Nav";

const Menu = () => {
  return (
    <div className={classes.Menu}>
      <p>Logo</p>
      <Nav />
    </div>
  );
};

export default Menu;
