import React, { Component } from "react";
import classes from "./Tasker.css";
import Tasks from "./Task/Tasks";
import Ventana from "../../UI/Ventana/Ventana";
//import UpdateTask from "./UpdateTask/UpdateTask";
import ConfigTasker from "./configTasker/ConfigTasker";
import axios from "../../axios-tasker";
import UpdateTask from "../Tasker/Task/CreateTask/CreateTask";

export class Tasker extends Component {
  state = {
    tasks: [],
    wantUpdate: false,
    taskToUpdate: null,
    date: new Date(),
    reRender: false,
  };

  componentDidMount() {
    this.reRender();
  }
  reRender = () => {
    axios
      .get("tasks.json")
      .then((response) => {
        let tasks = [];
        for (let key in response.data) {
          tasks.push({ id: key, ...response.data[key] });
        }
        this.setState({ tasks });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  markHandler = (id) => {
    const tasks = { ...this.state.tasks.filter((task) => task.id === id) };
    const value = !tasks[0].mark;
    axios
      .put("/tasks/" + id + "/mark.json", value)
      .then((response) => {
        this.reRender();
      })
      .catch((error) => console.log(error));
  };

  deleteHandler = (id) => {
    axios
      .delete("/tasks/" + id + ".json")
      .then((response) => {
        this.reRender();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  updateHandler = (id) => {
    this.setState({
      wantUpdate: true,
      taskToUpdate: this.state.tasks.filter((task) => task.id === id),
    });
  };

  updateTaskHandler = (taskUpdated) => {
    const token = this.state.taskToUpdate[0].id;
    const task = {
      id: this.state.taskToUpdate[0].id,
      task: taskUpdated.task.value,
      hora: taskUpdated.hora.value,
      seccion: taskUpdated.seccion.value,
      prioridad: taskUpdated.prioridad.value,
    };
    console.log(task);
    axios.put("/tasks/" + token + ".json", task).then((res) => {
      this.setState({ wantUpdate: false, taskToUpdate: null });
      this.reRender();
    });
  };
  cerrarVentana = () => {
    this.setState({
      wantUpdate: false,
      taskToUpdate: null,
    });
  };

  cambiarFecha = (fecha) => {
    // axios
    //   .get("tasks.json")
    //   .then((response) => {
    //     //const tasks = response.data.filter((task) => {});
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // this.setState({ date: fecha });
  };

  render() {
    let update = null;
    //  console.log(this.state.date);
    if (this.state.wantUpdate) {
      update = (
        <UpdateTask
          cerrarVentana={() => this.ocultarCreate(true)}
          update={true}
          updateTask={this.updateTaskHandler}
          task={this.state.taskToUpdate}
          delete={this.deleteHandler}
        />
      );
      // update = (
      //   <UpdateTask
      //     task={this.state.taskToUpdate}
      //     delete={this.deleteHandler}
      //     updateTask={this.updateTaskHandler}
      //   />
      // );
    }

    return (
      <div className={classes.tasks}>
        <Ventana
          mostrar={this.state.wantUpdate}
          cerrarVentana={this.cerrarVentana}
        >
          {update}
        </Ventana>
        <ConfigTasker updateDate={this.cambiarFecha} reUpdate={this.reRender} />
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
