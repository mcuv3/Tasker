import React from "react";
import classes from "./Input.css";

const Input = (props) => {
  let inputDisplay = null;
  switch (props.tag) {
    case "input-text":
      inputDisplay = (
        <input
          className={[classes.Input, classes.Text].join(" ")}
          {...props.config}
          value={props.value}
          onChange={props.change}
        />
      );
      break;
    case "input-time":
      inputDisplay = (
        <input
          className={[classes.Input, classes.Hora].join(" ")}
          {...props.config}
          value={props.value}
          onChange={props.change}
        />
      );
      break;
    case "textarea":
      inputDisplay = (
        <textarea
          className={[classes.Input, classes.Area].join(" ")}
          {...props.config}
          value={props.value}
          onChange={props.change}
        />
      );
      break;
    case "select":
      inputDisplay = (
        <select
          className={[classes.Input, classes.Seleccion].join(" ")}
          value={props.value}
          onChange={props.change}
          {...props.config}
        >
          {props.config.options.map((opt) =>
            opt.value === "" ? (
              <option value="" key={opt.tag} hidden>
                {opt.tag}
              </option>
            ) : (
              <option key={opt.tag} value={opt.value}>
                {opt.tag}
              </option>
            )
          )}
        </select>
      );
      break;
    default:
      inputDisplay = (
        <input
          className={classes.Input}
          {...props.config}
          value={props.value}
          onChange={props.change}
        />
      );
      break;
  }
  return inputDisplay;
};

export default Input;
