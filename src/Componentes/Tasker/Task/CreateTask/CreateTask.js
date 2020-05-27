import React, { useState } from "react";
import classes from "./CreateTask.css";
import axios from "../../../../axios-tasker";
import Input from "../../../../UI/Input/Input";
import Boton from "../../../../UI/Buttoms/Button";
import Spinner from "../../../../UI/Spinner/Spinner";
import Calendario from "react-datepicker";
import CalendarioBtn from "../../../../UI/Buttoms/Calendar/Calendar";
import add from "./../../../../Assets/Imagenes/plus.png";
import update from "./../../../../Assets/Imagenes/update.png";
import { useStore } from "../../../../store/store";
import { withRouter } from "react-router-dom";

const CreateTask = (props) => {
  const [form, setForm] = useState({
    task: {
      tag: "textarea",
      config: {
        required: true,
        minLength: 10,
        maxLength: 150,
        type: "text",
        placeholder: "Escribe tu tarea aqui .....",
      },
      value: props.update ? props.task[0].task : "",
      valid: false,
    },
    seccion: {
      tag: "select",
      config: {
        required: true,
        options: [
          { value: "", tag: "Área" },
          { value: "escuela", tag: "Escuela" },
          { value: "trabajo", tag: "Trabajo" },
          { value: "personal", tag: "Personal" },
          { value: "social", tag: "Social" },
        ],
      },
      value: props.update ? props.task.seccion : "",
      valid: true,
    },
    prioridad: {
      tag: "select",
      config: {
        required: true,
        options: [
          {
            value: "",
            tag: "Nivel de Importancia",
          },
          { value: 1, tag: "Urgente" },
          { value: 2, tag: "Muy Importante" },
          { value: 3, tag: "Importante" },
          { value: 4, tag: "Normal" },
        ],
      },
      value: props.update ? props.task[0].prioridad : 0,
      valid: true,
    },
    hora: {
      tag: "input-time",
      config: {
        required: false,
        type: "time",
      },
      value: props.update ? props.task[0].hora : "",
      valid: false,
    },
  });
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(new Date());
  const [store, dispatch] = useStore();

  const createTask = () => {
    const task = {};
    let seccion;
    for (let key in form) {
      let valor = { ...form[key] };
      key === "seccion" ? (seccion = valor.value) : (task[key] = valor.value);
    }
    task["mark"] = false;
    if (!store.auth.localId) {
      dispatch("SET_FIRST_TASK", {
        task,
        seccion,
        realDate: date.toDateString(),
      });
      props.history.push("/Auth");
    } else {
      setLoading(true);
      axios
        .post(
          `/${store.auth.localId}/` +
            date.toDateString() +
            "/" +
            seccion +
            ".json",
          task
        )
        .then((req) => {
          setLoading(false);
          props.cerrarVentana();
        })
        .catch((error) => {
          console.log(error);
          props.cerrarVentana();
        });
    }
  };

  // const validarForm = () => {
  //   Pendiente.... Cantidad minima y maxima de caracteres en los tasks
  // };

  const changeInput = (event, tag) => {
    const formulario = { ...form };
    formulario[tag].value = event.target.value;

    setForm(formulario);
  };

  const updateHandler = (event) => {
    event.preventDefault();
    props.updateTask({ ...form, fecha: date.toDateString() });
  };
  const onChange = (date) => {
    setDate(date);
  };

  const elementoForm = [];

  let botones = props.update ? (
    <Boton estilo="Updated" type="submit">
      <img src={update} alt="actualizar" className={classes.Boton} />
    </Boton>
  ) : (
    <Boton estilo="Submit" type="submit">
      <img src={add} alt="agregar" className={classes.Boton} />
    </Boton>
  );

  for (let key in form) {
    elementoForm.push({
      id: key,
      values: form[key],
    });
  }

  let formulario = <Spinner />;
  if (!loading) {
    formulario = (
      <form
        className={classes.Formulario}
        onSubmit={props.update ? updateHandler : createTask}
      >
        {props.update ? <h2>Modifica tu tarea</h2> : <h2>Crea tu tarea</h2>}
        <div className={classes.fecha}>
          <Calendario
            selected={date}
            minDate={new Date()}
            onChange={onChange}
            value={date}
            customInput={<CalendarioBtn estilo />}
          />
        </div>

        {elementoForm.map((elemento) => {
          return (
            <Input
              key={elemento.id}
              config={elemento.values.config}
              change={(event) => changeInput(event, elemento.id)}
              value={elemento.values.value}
              tag={elemento.values.tag}
            />
          );
        })}
        {botones}
      </form>
    );
  }

  return formulario;
};

export default withRouter(CreateTask);
