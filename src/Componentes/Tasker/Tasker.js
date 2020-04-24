import React, { Component } from "react";
import classes from "./Tasker.css";
import Ventana from "../../UI/Ventana/Ventana";
import Spinner from "../../UI/Spinner/Spinner";
import ConfigTasker from "./configTasker/ConfigTasker";
import axios from "../../axios-tasker";
import UpdateTask from "../Tasker/Task/CreateTask/CreateTask";
import TasksSeccion from "./Task/TaskSeccion/TaskSeccion";

export class Tasker extends Component {
  state = {
    tasks: [],
    wantUpdate: false,
    taskToUpdate: null,
    date: new Date(),
    realDate: "",
    loading: false,
    noTasks: false,
    markFlag: false,
  };

  componentDidMount() {
    this.reRender();
  }
  componentWillUnmount() {
    console.log("Se desmonto wey");
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
        this.setState({ realDate, loading: false, markFlag: false });
        let secciones = [];
        let tareas = [];
        for (let key in response.data) {
          for (let llave in response.data[key]) {
            const task = response.data[key];
            tareas.push({
              id: llave,
              ...task[llave],
            });
          }
          secciones.push({ seccion: key, tareas: tareas });
          tareas = [];
        }
        if (secciones.length === 0)
          this.setState({ tasks: secciones, noTasks: true });
        else this.setState({ tasks: secciones, noTasks: false });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  markHandler = (id, seccion) => {
    this.setState({ markFlag: true });
    const index = this.state.tasks.findIndex((e) => e.seccion === seccion);
    const tasks = {
      ...this.state.tasks[index].tareas.filter((task) => task.id === id),
    };
    const value = !tasks[0].mark;
    axios
      .put(
        "/tasks/" +
          this.state.realDate +
          "/" +
          seccion +
          "/" +
          id +
          "/mark.json",
        value
      )
      .then((response) => {
        this.reRender();
      })
      .catch((error) => console.log(error));
  };

  deleteHandler = (id, seccion) => {
    axios
      .delete(
        "/tasks/" + this.state.realDate + "/" + seccion + "/" + id + ".json"
      )
      .then((response) => {
        this.reRender();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  updateHandler = (id, seccion) => {
    const index = this.state.tasks.findIndex((e) => e.seccion === seccion);
    this.setState({
      wantUpdate: true,
      taskToUpdate: {
        ...this.state.tasks[index].tareas.filter((task) => task.id === id),
        seccion,
      },
    });
  };

  updateTaskHandler = (taskUpdated) => {
    const token = this.state.taskToUpdate[0].id;

    const task = {
      task: taskUpdated.task.value,
      hora: taskUpdated.hora.value,
      prioridad: taskUpdated.prioridad.value,
      mark: false,
    };

    axios
      .put(
        "/tasks/" +
          this.state.realDate +
          "/" +
          taskUpdated.seccion.value +
          "/" +
          token +
          ".json",
        task
      )
      .then((res) => {
        if (taskUpdated.seccion.value !== this.state.taskToUpdate.seccion)
          axios
            .delete(
              "/tasks/" +
                this.state.realDate +
                "/" +
                this.state.taskToUpdate.seccion +
                "/" +
                token +
                ".json"
            )
            .then((res) => {
              this.setState({ wantUpdate: false, taskToUpdate: null });
              this.reRender();
            });
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

    if (!this.state.loading || this.state.markFlag)
      if (this.state.noTasks)
        tasks = (
          <div className={classes.Spinner}>
            <p>Añade algunas tareas ....</p>
          </div>
        );
      else
        tasks = (
          <TasksSeccion
            secciones={this.state.tasks}
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
