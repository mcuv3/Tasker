import React from "react";
import classes from "./BackDrop.css";

const BackDrop = (props) =>
  props.mostrar ? (
    <div className={classes.BackDrop}>{props.children}</div>
  ) : null;

export default BackDrop;
