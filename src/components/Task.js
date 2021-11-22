import { FaTimes } from "react-icons/fa";
import React from "react";

const Task = ({ id, body, day, complete, toggleComplete, deleteTask }) => {
  return (
    <div
      className={`task${complete ? " done" : ""}`}
      onDoubleClick={() => toggleComplete(id)}
    >
      <div className="heading">
        <h3>{body}</h3>
        <FaTimes onClick={() => deleteTask(id)} />
      </div>
      {day && <p>{day}</p>}
    </div>
  );
};

export default Task;
