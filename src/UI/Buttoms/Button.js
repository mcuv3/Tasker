import React from "react";
import classes from "./Button.css";
const Button = (props) => {
  let style = [];
  style.push(props.estilo);
  return (
    <button
      onClick={props.clicked}
      type={props.type}
      className={[classes[props.estilo]].join(" ")}
    >
      {props.children}
    </button>
  );
};

export default Button;
