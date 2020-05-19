import React from "react";
import classes from "./Menu.css";
import Nav from "./Nav/Nav";

const Menu = () => {
  return (
    <header className={classes.Menu}>
      <h3>Tasker</h3>
      <nav className={classes.Nave}>
        <Nav />
      </nav>
    </header>
  );
};

export default Menu;
