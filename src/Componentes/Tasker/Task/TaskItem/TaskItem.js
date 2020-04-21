import React from "react";
import classes from "./TaskItem.css";

import Boton from "../../../../UI/Buttoms/Button";
const TaskItem = (props) => {
  let isChecked = [classes.tarea];
  if (props.marked) isChecked.push(classes.Marked);

  let colorImportance = [classes.Task];

  switch (props.prioridad) {
    case "urgente":
      colorImportance.push(classes.Urgente);
      break;
    case "muyimportante":
      colorImportance.push(classes.MuyImportante);
      break;
    case "importante":
      colorImportance.push(classes.Importante);
      break;
    case "normal":
      colorImportance.push(classes.Normal);
      break;
    default:
      colorImportance.push([]);
      break;
  }

  return (
    <div className={colorImportance.join(" ")}>
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
