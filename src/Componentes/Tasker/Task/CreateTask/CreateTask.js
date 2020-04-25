import React, { Component } from "react";
import classes from "./CreateTask.css";
import axios from "../../../../axios-tasker";
import Input from "../../../../UI/Input/Input";
import Boton from "../../../../UI/Buttoms/Button";
import Spinner from "../../../../UI/Spinner/Spinner";
import Calendario from "react-datepicker";
import CalendarioBtn from "../../../../UI/Buttoms/Calendar/Calendar";
import add from "./../../../../Assets/Imagenes/plus.png";
import update from "./../../../../Assets/Imagenes/update.png";

class CreateTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        task: {
          tag: "textarea",
          config: {
            required: true,
            minLength: 10,
            maxLength: 150,
            type: "text",
            placeholder: "Escribe tu tarea aqui .....",
          },
          value: this.props.update ? this.props.task[0].task : "",
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
          value: this.props.update ? this.props.task.seccion : "",
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
          value: this.props.update ? this.props.task[0].prioridad : 0,
          valid: true,
        },
        hora: {
          tag: "input",
          config: {
            required: false,
            type: "time",
          },
          value: this.props.update ? this.props.task[0].hora : "",
          valid: false,
        },
      },
      loar: false,
      date: new Date(),
      realDate: "",
    };
  }

  createTask = () => {
    const task = {};
    let seccion;
    for (let key in this.state.form) {
      let valor = { ...this.state.form[key] };
      key === "seccion" ? (seccion = valor.value) : (task[key] = valor.value);
    }

    task["mark"] = false;

    this.setState({ loar: true });

    const realDate =
      (this.state.date.getDate() < 10
        ? "0" + this.state.date.getDate()
        : this.state.date.getDate()) +
      "" +
      (this.state.date.getMonth() < 10
        ? "0" + this.state.date.getMonth()
        : this.state.date.getMonth()) +
      "" +
      this.state.date.getFullYear();

    axios
      .post("/tasks/" + realDate + "/" + seccion + ".json", task)
      .then((req) => {
        this.setState({ loar: false });
        this.props.cerrarVentana();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  validarForm = () => {
    const task = {};
    for (let key in this.state.form) {
      let valor = { ...this.state.form[key] };
      task[key] = valor.value;
    }
    task["mark"] = false;

    console.log(task);
  };

  changeInput = (event, tag) => {
    const form = { ...this.state.form };
    form[tag].value = event.target.value;

    this.setState({ form });
  };

  updateHandler = (event) => {
    event.preventDefault();
    this.props.updateTask(this.state.form);
  };
  onChange = (date) => {
    this.setState({ date });
  };

  render() {
    const elementoForm = [];

    let botones = this.props.update ? (
      <Boton estilo="Submit" type="submit">
        <img src={update} alt="actualizar" />
      </Boton>
    ) : (
      <Boton estilo="Submit" type="submit">
        <img src={add} alt="agregar" />
      </Boton>
    );

    for (let key in this.state.form) {
      elementoForm.push({
        id: key,
        values: this.state.form[key],
      });
    }

    let formulario = <Spinner />;
    if (!this.state.loar) {
      formulario = (
        <form
          className={classes.Formulario}
          onSubmit={this.props.update ? this.updateHandler : this.createTask}
        >
          <header>
            {this.props.update ? (
              <h2>Modifica tu tarea</h2>
            ) : (
              <h2>Crea tu tarea</h2>
            )}
            <Calendario
              selected={this.state.date}
              minDate={new Date()}
              onChange={this.onChange}
              value={this.state.date}
              customInput={<CalendarioBtn estilo />}
            />
          </header>

          {elementoForm.map((elemento) => {
            return (
              <Input
                key={elemento.id}
                config={elemento.values.config}
                change={(event) => this.changeInput(event, elemento.id)}
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
  }
}

export default CreateTask;
