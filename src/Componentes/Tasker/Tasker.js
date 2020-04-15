import React, { Component } from "react";
import classes from "./Tasker.css";
import Tasks from "./Task/Tasks";
import Ventana from "../../UI/Ventana/Ventana";
import UpdateTask from "./UpdateTask/UpdateTask";
import ConfigTasker from "./configTasker/ConfigTasker";

export class Tasker extends Component {
  state = {
    tasks: [
      {
        id: 1,
        title: "Esto es una Prueba",
        mark: false,
      },
      {
        id: 2,
        title: "Esto es una Prueba 1",
        mark: false,
      },
      {
        id: 3,
        title: "Esto es una Prueba 1",
        mark: false,
      },
    ],
    wantUpdate: false,
    taskToUpdate: null,
  };
  markHandler = (id) => {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.id === id) task.mark = !task.mark;
        return task;
      }),
    });
  };
  deleteHandler = (id) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== id),
      wantUpdate: false,
      taskToUpdate: null,
    });
  };
  updateHandler = (id) => {
    this.setState({
      wantUpdate: true,
      taskToUpdate: this.state.tasks.filter((task) => task.id === id),
    });
  };
  updateTaskHandler = (taskUpdated) => {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (taskUpdated.id === task.id) task = taskUpdated;
        return task;
      }),
      wantUpdate: false,
      taskToUpdate: null,
    });
  };
  cerrarVentana = () => {
    this.setState({
      wantUpdate: false,
      taskToUpdate: null,
    });
  };
  render() {
    let update = null;

    if (this.state.wantUpdate)
      update = (
        <UpdateTask
          mostrar={this.state.wantUpdate}
          task={this.state.taskToUpdate}
          delete={this.deleteHandler}
          updateTask={this.updateTaskHandler}
        />
      );
    return (
      <div className={classes.tasks}>
        <Ventana
          mostrar={this.state.wantUpdate}
          cerrarVentana={this.cerrarVentana}
        >
          {update}
        </Ventana>
        <ConfigTasker />
        <Tasks
          tasks={this.state.tasks}
          mark={this.markHandler}
          delete={this.deleteHandler}
          update={this.updateHandler}
        />
      </div>
    );
  }
}

export default Tasker;
