import React from "react";
import Tasks from "../Tasks";
import classes from "./TaskSeccion.css";

const TaskSeccion = (props) => {
  return (
    <div className={classes.Secciones}>
      {props.secciones.map((seccion) => {
        return (
          <div className={classes.Seccion} key={seccion.seccion}>
            <h2>{seccion.seccion}</h2>
            <Tasks
              tasks={seccion.tareas}
              mark={(e) => props.mark(e, seccion.seccion)}
              delete={(e) => props.delete(e, seccion.seccion)}
              update={(e) => props.update(e, seccion.seccion)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TaskSeccion;
