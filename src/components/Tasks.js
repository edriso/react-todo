import React from "react";
import Task from "./Task";

const Tasks = ({ tasksList, toggleComplete, deleteTask }) => {
  return (
    <>
      {tasksList.length > 0 ? (
        tasksList.map((task) => (
          <Task
            {...task}
            key={task.id}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        ))
      ) : (
        <p>No Tasks added yet!</p>
      )}
    </>
  );
};

export default Tasks;
