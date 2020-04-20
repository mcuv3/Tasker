import React from "react";
import classes from "./TaskItem.css";

import Boton from "../../../../UI/Buttoms/Button";
const TaskItem = (props) => {
  let isChecked = [classes.tarea];
  if (props.marked) isChecked.push(classes.Marked);

  return (
    <div className={classes.Task}>
      <div className={classes.TaskItem}>
        <input type="checkbox" onChange={props.Checked} checked={props.mark} />
        <p className={isChecked.join(" ")} onClick={props.update}>
          {props.title}
        </p>
      </div>

      <div className={classes.Botones}>
        <Boton estilo="Delete" clicked={props.delete}>
          <div className={classes.del}>+</div>
        </Boton>
      </div>
    </div>
  );
};

export default TaskItem;
