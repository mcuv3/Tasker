import React, { Component } from "react";
import classes from "./CreateTask.css";
import axios from "../../../../axios-tasker";
import Input from "../../../../UI/Input/Input";
import Boton from "../../../../UI/Buttoms/Button";
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
              { value: "default", tag: "Área" },
              { value: "escuela", tag: "Escuela" },
              { value: "trabajo", tag: "Trabajo" },
              { value: "personal", tag: "Personal" },
              { value: "social", tag: "Social" },
            ],
          },
          value: this.props.update ? this.props.task[0].seccion : "",
          valid: true,
        },
        prioridad: {
          tag: "select",
          config: {
            required: true,
            options: [
              {
                value: "default",
                tag: "Nivel de Importancia",
                disabled: true,
                selected: true,
                hidden: true,
              },
              { value: "urgente", tag: "Urgente" },
              { value: "muyimportante", tag: "Muy Importante" },
              { value: "importante", tag: "Importante" },
              { value: "normal", tag: "Normal" },
            ],
          },
          value: this.props.update ? this.props.task[0].prioridad : "",
          valid: true,
        },
        hora: {
          tag: "input",
          config: {
            required: true,
            type: "time",
          },
          value: this.props.update ? this.props.task[0].hora : "",
          valid: false,
        },
      },
      loar: false,
    };
  }

  createTask = () => {
    const task = {};
    for (let key in this.state.form) {
      let valor = { ...this.state.form[key] };
      task[key] = valor.value;
    }
    task["mark"] = false;
    this.setState({ loar: true });
    axios
      .post("/tasks/" + this.props.date + ".json", task)
      .then((req) => {
        this.setState({ loar: false });
        this.props.cerrarVentana();
      })
      .catch((error) => {
        console.log(error);
      });
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

  render() {
    const elementoForm = [];

    let botones = this.props.update ? (
      <Boton
        estilo="Submit"
        clicked={() => this.props.updateTask(this.state.form)}
      >
        Actualizar
      </Boton>
    ) : (
      <Boton estilo="Submit" clicked={this.createTask}>
        Agregar
      </Boton>
    );

    for (let key in this.state.form) {
      elementoForm.push({
        id: key,
        values: this.state.form[key],
      });
    }

    let formulario = <h1>LOADING ....</h1>;
    if (!this.state.loar) {
      formulario = (
        <form
          className={classes.Formulario}
          onSubmit={this.props.update ? this.updateHandler : this.createTask}
        >
          {this.props.update ? (
            <h2>Modifica tu tarea</h2>
          ) : (
            <h2>Crea tu tarea</h2>
          )}
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
