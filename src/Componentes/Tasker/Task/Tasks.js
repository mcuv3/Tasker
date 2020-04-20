import React from "react";
import Task from "./TaskItem/TaskItem";

const Tasks = (props) => {
  return props.tasks.map((task) => {
    return (
      <Task
        key={task.id}
        title={task.task}
        mark={task.mark}
        Checked={() => props.mark(task.id)}
        delete={() => props.delete(task.id)}
        update={() => props.update(task.id)}
        marked={task.mark}
      />
    );
  });
};

export default Tasks;
