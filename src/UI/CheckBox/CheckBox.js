import React from "react";
import classes from "./CheckBox.css";

const CheckBox = (props) => {
  return (
    <div className={classes.page__toggle} style={{ marginTop: "1em" }}>
      <label className={classes.toggle}>
        <input
          className={classes.toggle__input}
          type="checkbox"
          onChange={props.Checked}
          checked={props.mark}
        />
        <span className={classes.toggle__label}>
          <span className={classes.toggle__text}></span>
        </span>
      </label>
    </div>
  );
};

export default CheckBox;
