import React from "react";
import classes from "./TaskItem.css";
import CheckBox from "../../../../UI/CheckBox/CheckBox";
import Boton from "../../../../UI/Buttoms/Button";
const TaskItem = (props) => {
  let isChecked = [classes.tarea];
  if (props.marked) isChecked.push(classes.Marked);

  let colorImportance = [classes.Task];

  switch (props.prioridad) {
    case "1":
      colorImportance.push(classes.Urgente);
      break;
    case "2":
      colorImportance.push(classes.MuyImportante);
      break;
    case "3":
      colorImportance.push(classes.Importante);
      break;
    case "4":
      colorImportance.push(classes.Normal);
      break;
    default:
      colorImportance.push([]);
      break;
  }

  return (
    <div className={colorImportance.join(" ")}>
      <div className={classes.TaskItem}>
        <CheckBox Checked={props.Checked} mark={props.mark} />
        <p className={isChecked.join(" ")} onClick={props.update}>
          {props.title}
        </p>
      </div>

      <div className={classes.Botones}>
        <Boton estilo="Delete" clicked={props.delete}>
          <div className={classes.del}>+</div>
        </Boton>
        {props.hora ? (
          <span>
            Antes de <strong>{props.hora}</strong>
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default TaskItem;
