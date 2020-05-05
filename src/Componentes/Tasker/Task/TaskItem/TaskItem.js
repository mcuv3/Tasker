import React from "react";
import classes from "./TaskItem.css";
import CheckBox from "../../../../UI/CheckBox/CheckBox";
import Boton from "../../../../UI/Buttoms/Button";
const TaskItem = (props) => {
  let isChecked = [classes.tarea];

  let colorImportance = [classes.Task];
  if (props.marked) isChecked.push(classes.Marked);

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
    case "5":
      colorImportance.push(classes.MarkedTask);
      break;
    default:
      colorImportance.push([]);
      break;
  }

  return (
    <div
      className={colorImportance.join(" ")}
      style={{
        boxShadow: props.marked ? "0 2px 3px rgba(55, 155, 77, 0.3)" : null,
      }}
    >
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
