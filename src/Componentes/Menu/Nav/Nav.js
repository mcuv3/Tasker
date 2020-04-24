import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Nav.css";

const Nav = () => {
  return (
    <div className={classes.Nav}>
      <ul>
        <li>
          <NavLink to="/" activeClassName={classes.active} exact>
            Tasks
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" activeClassName={classes.active}>
            About
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/About" activeClassName={classes.active}>
            Profile
          </NavLink>
        </li> */}
      </ul>
    </div>
  );
};

export default Nav;
