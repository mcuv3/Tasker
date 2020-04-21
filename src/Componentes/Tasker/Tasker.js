import React, { Component } from "react";
import classes from "./Tasker.css";
import Tasks from "./Task/Tasks";
import Ventana from "../../UI/Ventana/Ventana";
import Spinner from "../../UI/Spinner/Spinner";
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
    realDate: "",
    loading: false,
    noTasks: false,
  };

  componentDidMount() {
    this.reRender();
  }

  componentDidUpdate() {
    //this.reRender();
  }
  reRender = (date) => {
    let realDate = "";

    if (date) {
      realDate =
        (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) +
        "" +
        (date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()) +
        "" +
        date.getFullYear();
    } else {
      realDate =
        (this.state.date.getDate() < 10
          ? "0" + this.state.date.getDate()
          : this.state.date.getDate()) +
        "" +
        (this.state.date.getMonth() < 10
          ? "0" + this.state.date.getMonth()
          : this.state.date.getMonth()) +
        "" +
        this.state.date.getFullYear();
    }
    this.setState({ loading: true });
    axios
      .get("/tasks/" + realDate + ".json")
      .then((response) => {
        this.setState({ realDate, loading: false });
        let tasks = [];
        for (let key in response.data) {
          tasks.push({ id: key, ...response.data[key] });
        }

        if (tasks.length === 0) this.setState({ tasks, noTasks: true });
        else this.setState({ tasks, noTasks: false });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  markHandler = (id) => {
    const tasks = { ...this.state.tasks.filter((task) => task.id === id) };
    const value = !tasks[0].mark;
    axios
      .put("/tasks/" + this.state.realDate + "/" + id + "/mark.json", value)
      .then((response) => {
        this.reRender();
      })
      .catch((error) => console.log(error));
  };

  deleteHandler = (id) => {
    axios
      .delete("/tasks/" + this.state.realDate + "/" + id + ".json")
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
    console.log(this.state.date);
    axios
      .put("/tasks/" + this.state.realDate + "/" + token + ".json", task)
      .then((res) => {
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
    this.setState({ date: fecha });
    this.reRender(fecha);
  };

  render() {
    let update = null;
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
    }
    let tasks = (
      <div className={classes.Spinner}>
        <Spinner />
      </div>
    );
    if (!this.state.loading)
      if (this.state.noTasks)
        tasks = (
          <div className={classes.Spinner}>
            {" "}
            <p>Add Some Tasks ....</p>{" "}
          </div>
        );
      else
        tasks = (
          <Tasks
            tasks={this.state.tasks}
            mark={this.markHandler}
            delete={this.deleteHandler}
            update={this.updateHandler}
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
        <ConfigTasker updateDate={this.cambiarFecha} reUpdate={this.reRender} />

        {tasks}
      </div>
    );
  }
}

export default Tasker;
