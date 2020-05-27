import React from "react";
import classes from "./Calendar.css";

const Calendar = (props) => {
  const { value, onClick } = props;

  let estilo = props.estilo ? classes.Create : classes.Date;
  return (
    <p className={estilo} onClick={onClick}>
      {value}
    </p>
  );
};

export default Calendar;
