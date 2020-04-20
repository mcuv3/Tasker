import React from "react";
import classes from "./Button.css";
const Button = (props) => {
  let style = [];
  style.push(props.estilo);
  return (
    <button
      onClick={props.clicked}
      className={[classes[props.estilo]].join(" ")}
    >
      {props.children}
    </button>
  );
};

export default Button;
