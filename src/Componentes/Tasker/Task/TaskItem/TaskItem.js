import React from "react";
import classes from "./TaskItem.css";
import Buttoms from "../../../../UI/Buttoms/TaskBtn/Buttoms";
const TaskItem = (props) => {
  let isChecked = null;
  if (props.marked) isChecked = classes.Marked;

  return (
    <div className={classes.Task}>
      <input type="checkbox" onClick={props.Checked} />
      <p className={isChecked}>{props.title}</p>
      <Buttoms delete={props.delete} update={props.update} />
    </div>
  );
};

export default TaskItem;
