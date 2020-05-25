import React, { useState, useEffect } from "react";
import classes from "./Tasker.css";
import Ventana from "../../UI/Ventana/Ventana";
import Spinner from "../../UI/Spinner/Spinner";
import ConfigTasker from "../../Componentes/Tasker/configTasker/ConfigTasker";
import axios from "../../axios-tasker";
import UpdateTask from "../../Componentes/Tasker/Task/CreateTask/CreateTask";
import TasksSeccion from "../../Componentes/Tasker/Task/TaskSeccion/TaskSeccion";

const Tasker = () => {
  const [tasks, setTasks] = useState([]);

  const [wantToUpdateTask, setWantToUpdateTask] = useState({
    wantUpdate: false,
    taskToUpdate: null,
  });
  const [realDate, setRealDate] = useState(new Date().toDateString());
  const [loading, setLoading] = useState(false);
  const [noTasks, setNoTasks] = useState(false);
  const [markFlag, setMarkFlag] = useState(false);

  useEffect(() => {
    reRender(new Date());
  }, []);

  const reRender = (date) => {
    let realDate = "";
    if (!date) date = new Date();

    if (date) {
      realDate =
        (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) +
        "" +
        (date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()) +
        "" +
        date.getFullYear();
    } else {
      realDate =
        (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) +
        "" +
        (date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()) +
        "" +
        date.getFullYear();
    }
    let userId = localStorage.getItem("localId");

    setLoading(true);
    axios
      .get(`/${userId}/` + realDate + ".json")
      .then((response) => {
        setRealDate(realDate);
        setLoading(false);
        setMarkFlag(false);
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
          secciones.push({
            seccion: key,
            tareas,
          });
          tareas = [];
        }
        if (secciones.length === 0) {
          setTasks(secciones);
          setNoTasks(true);
        } else {
          setTasks(secciones);
          setNoTasks(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const markHandler = (id, seccion) => {
    setMarkFlag(true);
    const index = tasks.findIndex((e) => e.seccion === seccion);
    const indexTask = tasks[index].tareas.findIndex((e) => e.id === id);
    let task;

    if (!tasks[index].tareas[indexTask].mark) {
      task = {
        id,
        hora: tasks[index].tareas[indexTask].hora,
        mark: true,
        prioridad: "5",
        prevPrioridad: tasks[index].tareas[indexTask].prioridad,
        task: tasks[index].tareas[indexTask].task,
      };
    } else {
      task = {
        id,
        hora: tasks[index].tareas[indexTask].hora,
        mark: false,
        prioridad: tasks[index].tareas[indexTask].prevPrioridad,
        task: tasks[index].tareas[indexTask].task,
      };
    }

    axios
      .put(
        `/${localStorage.getItem("localId")}/` +
          realDate +
          "/" +
          seccion +
          "/" +
          id +
          ".json",
        task
      )
      .then((response) => {
        setTasks(
          tasks.map((secc) => {
            if (secc.seccion === seccion) {
              secc.tareas[indexTask] = task;
            }
            return secc;
          })
        );
      })
      .catch((error) => console.log(error));
  };

  const deleteHandler = (id, seccion) => {
    axios
      .delete(
        `/${localStorage.getItem("localId")}/` +
          realDate +
          "/" +
          seccion +
          "/" +
          id +
          ".json"
      )
      .then((response) => {
        setTasks(
          tasks
            .map((sec) => {
              if (sec.seccion === seccion) {
                sec.tareas = sec.tareas.filter((task) => task.id !== id);
              }
              return sec;
            })
            .filter((sec) => sec.tareas.length > 0)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const updateHandler = (id, seccion) => {
    const index = tasks.findIndex((e) => e.seccion === seccion);
    setWantToUpdateTask({
      wantUpdate: true,
      taskToUpdate: {
        ...tasks[index].tareas.filter((task) => task.id === id),
        seccion,
      },
    });
  };

  const updateTaskHandler = (taskUpdated) => {
    const token = wantToUpdateTask.taskToUpdate[0].id;

    const task = {
      id: token,
      task: taskUpdated.task.value,
      hora: taskUpdated.hora.value,
      prioridad: taskUpdated.prioridad.value,
      mark: false,
    };

    axios
      .put(
        `/${localStorage.getItem("localId")}/` +
          taskUpdated.fecha +
          "/" +
          taskUpdated.seccion.value +
          "/" +
          token +
          ".json",
        task
      )
      .then((res) => {
        if (
          taskUpdated.seccion.value !== wantToUpdateTask.taskToUpdate.seccion || //Necesitamos Filtrar la seccion antigua y agregar task
          taskUpdated.fecha !== realDate //Eliminar task
        ) {
          axios
            .delete(
              `/${localStorage.getItem("localId")}/` +
                realDate +
                "/" +
                wantToUpdateTask.taskToUpdate.seccion +
                "/" +
                token +
                ".json"
            )
            .then((res) => {
              const newTasks = [...tasks];
              let seccionFound = false;
              newTasks.map((secc) => {
                if (secc.seccion === wantToUpdateTask.taskToUpdate.seccion) {
                  secc.tareas = secc.tareas.filter((t) => t.id !== token);
                }
                if (taskUpdated.fecha === realDate) {
                  if (secc.seccion === taskUpdated.seccion.value) {
                    seccionFound = true;
                    secc.tareas.push(task);
                  }
                }
                return secc;
              });

              if (!seccionFound && taskUpdated.fecha === realDate)
                newTasks.push({
                  seccion: taskUpdated.seccion.value,
                  tareas: [task],
                });

              setWantToUpdateTask({ wantUpdate: false, taskToUpdate: null });

              setTasks(newTasks.filter((s) => s.tareas.length > 0));
            });
        } else {
          const index = tasks.findIndex(
            (e) => e.seccion === taskUpdated.seccion.value
          );
          const indexTask = tasks[index].tareas.findIndex(
            (e) => e.id === token
          );
          setTasks(
            tasks.map((secc) => {
              if (secc.seccion === taskUpdated.seccion.value) {
                secc.tareas[indexTask] = task;
              }
              return secc;
            })
          );
          setWantToUpdateTask({ wantUpdate: false, taskToUpdate: null });
        }
      });
  };
  const cerrarVentana = () => {
    setWantToUpdateTask({
      wantUpdate: false,
      taskToUpdate: null,
    });
  };

  const cambiarFecha = (fecha) => {
    reRender(fecha);
  };

  let update = null;
  if (wantToUpdateTask.wantUpdate) {
    update = (
      <UpdateTask
        cerrarVentana={() => cerrarVentana(true)}
        update={true}
        updateTask={updateTaskHandler}
        task={wantToUpdateTask.taskToUpdate}
        delete={deleteHandler}
      />
    );
  }
  let tasksJSX = (
    <div className={classes.Spinner}>
      <Spinner />
    </div>
  );

  if (!loading || markFlag)
    if (noTasks)
      tasksJSX = (
        <div className={classes.Spinner}>
          <p>Añade algunas tareas ....</p>
        </div>
      );
    else
      tasksJSX = (
        <TasksSeccion
          secciones={tasks}
          mark={markHandler}
          delete={deleteHandler}
          update={updateHandler}
        />
      );

  return (
    <div className={classes.tasks}>
      <Ventana
        mostrar={wantToUpdateTask.wantUpdate}
        cerrarVentana={cerrarVentana}
      >
        {update}
      </Ventana>
      <ConfigTasker updateDate={cambiarFecha} reUpdate={reRender} />

      {tasksJSX}
    </div>
  );
};

export default React.memo(Tasker);
