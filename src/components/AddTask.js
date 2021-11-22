import React from "react";
import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [body, setBody] = useState("");
  const [day, setDay] = useState("");
  const [complete, setComplete] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!body) {
      alert("Please add a task");
      return;
    }

    onAdd({ body, day, complete });

    setBody("");
    setDay("");
    setComplete(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day &amp; Time</label>
        <input
          type="text"
          placeholder="When to start?"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Completed?</label>
        <input
          type="checkbox"
          checked={complete}
          value={complete}
          onChange={(e) => setComplete(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Add Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
