import React, { Component } from "react";
import Botones from "../../../UI/Buttoms/TaskBtn/Buttoms";

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
    if (this.props.mostrar)
      mostrar = (
        <div>
          <p>{this.state.task.id}</p>
          <input
            type="text"
            value={this.state.task.title}
            onChange={(event) => this.updateTask(event)}
          ></input>

          <Botones
            delete={() => this.props.delete(this.state.task.id)}
            update={() => this.props.updateTask(this.state.task)}
          />
        </div>
      );
    return mostrar;
  }
}

export default UpdateTask;
