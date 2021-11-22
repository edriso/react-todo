import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";
import AddTask from "./AddTask";
import Tasks from "./Tasks";

function Home() {
  const [addingTask, setAddingTask] = useState(false);
  const toggleAdd = () => {
    setAddingTask(!addingTask);
  };

  const [tasks, setTasks] = useState(null);

  // fetching data
  const fetchData = async (link) => {
    const res = await fetch(link);
    const data = await res.json();

    return data;
  };

  // fetch a single task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  useEffect(() => {
    const getTasks = async () => {
      let myTasks = await fetchData("http://localhost:5000/tasks");
      setTasks(myTasks);
    };

    getTasks();
  }, []);

  // deleting a task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    let filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  // adding a new task
  const handleAdd = async (newTask) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    const data = await res.json();

    setTasks([...tasks, data]);

    setAddingTask(false);

    // const id = Math.floor(Math.random() * 10000) + 1;
    // newTask = { id, ...newTask };
    // setTasks([...tasks, newTask]);
  };

  // toggling task completion when dblclick
  const toggleComplete = async (id) => {
    const selectedTask = await fetchTask(id);
    const updatedTask = { ...selectedTask, complete: !selectedTask.complete };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      // cuz we're sending data
      headers: {
        "Content-type": "application/json",
      },
      // body for the data we're sending; to turn it to a string
      body: JSON.stringify(updatedTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...data, complete: !task.complete } : task
      )
    );
  };

  return (
    <>
      <Header>
        <Button
          text={addingTask ? "Close" : "Add"}
          color={addingTask ? "#afafaf" : ""}
          addingTask={addingTask}
          toggleAdd={toggleAdd}
        />
      </Header>

      {addingTask && <AddTask onAdd={handleAdd} />}

      {tasks ? (
        <Tasks
          tasksList={tasks}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ) : (
        <p>Loading Tasks ...</p>
      )}

      <Footer />
    </>
  );
}

export default Home;
