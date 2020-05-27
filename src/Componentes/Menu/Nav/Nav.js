import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { useStore } from "../../../store/store";
import classes from "./Nav.css";

const Nav = (props) => {
  const store = useStore()[0];

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
      </ul>
      {!store.auth.idToken ? (
        <Link to="/Auth" className={classes.Auth}>
          <i className="fas fa-user fa-2x"></i>
        </Link>
      ) : (
        <NavLink className={classes.Auth} to="/logout">
          <i className="fas fa-sign-out-alt "></i>
        </NavLink>
      )}
    </div>
  );
};

export default withRouter(Nav);
