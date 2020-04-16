import React from "react";
import classes from "./CreateTask.css";

const CreateTask = (props) => {
  return (
    <form className={classes.Formulario}>
      <header>Nueva Tarea</header>
      <div className={classes.Campo}>
        <p>Tarea</p>
        <textarea required />
      </div>
      <div className={classes.Campo}>
        <p>Seccion</p>
        <select>
          <option value="Escuela">Escuela</option>
          <option value="Trabajo">Trabajo</option>
          <option value="Personal">Personal</option>
          <option value="Social">Social</option>
        </select>
      </div>
      <div className={classes.Campo}>
        <p>Prioridad</p>
        <select>
          <option value="Urgente">Urgente</option>
          <option value="Muy Importante">Muy Importante</option>
          <option value="Importante">Importante</option>
          <option value="Normal">Normal</option>
        </select>
      </div>
      <div className={classes.Campo}>
        <p>Hora (Opcional)</p>
        <input type="time" />
      </div>
      <button>Agregar</button>
    </form>
  );
};

export default CreateTask;
