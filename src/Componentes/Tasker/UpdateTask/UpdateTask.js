import React, { Component } from "react";

import Boton from "../../../UI/Buttoms/Button";

class UpdateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.task[0],
    };
  }
  updateTask = (event) => {
    const taskUpdated = { ...this.state.task };
    taskUpdated.title = event.target.value;
    this.setState({ task: taskUpdated });
  };
  render() {
    let mostrar = null;

    mostrar = (
      <div>
        <p>{this.state.task.id}</p>
        <input
          type="text"
          value={this.state.task.task}
          onChange={(event) => this.updateTask(event)}
        ></input>
        <Boton
          estilo="Delete"
          clicked={() => this.props.delete(this.state.task.id)}
        >
          Eliminar
        </Boton>
        <Boton
          estilo="Updated"
          clicked={() => this.props.updateTask(this.state.task)}
        >
          Actualizar
        </Boton>
      </div>
    );
    return mostrar;
  }
}

export default UpdateTask;
