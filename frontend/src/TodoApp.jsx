import axios from "axios";
import { useEffect, useState } from "react";
import "./TodoApp.css";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/tasks").then((res) => setTasks(res.data));
  }, []);

  const addTask = () => {
    axios
      .post("http://localhost:8080/tasks", { title: newTask, completed: false })
      .then((res) => {
        setTasks([...tasks, res.data]);
        setNewTask("");
      });
  };

  const toggleTask = (id, completed) => {
    axios
      .put(`http://localhost:8080/tasks/${id}`, {
        title: tasks.find((t) => t.id === id).title,
        completed: !completed,
      })
      .then((res) => {
        setTasks(tasks.map((task) => (task.id === id ? res.data : task)));
      });
  };

  const deleteTask = (id) => {
    axios.delete(`http://localhost:8080/tasks/${id}`).then(() => {
      setTasks(tasks.filter((task) => task.id !== id));
    });
  };

  return (
    <div className="todo-container">
      <h2 className="todo-title">To-Do List</h2>
      <div className="todo-input-container">
        <input
          className="todo-input"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="todo-add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ul className="todo-list">
        {tasks.map((task) => (
          <li key={task.id} className="todo-item">
            <span className={task.completed ? "completed" : ""}>
              {task.title}
            </span>
            <div>
              <button
                className="todo-toggle-button"
                onClick={() => toggleTask(task.id, task.completed)}
              >
                {task.completed ? "Undo" : "Done"}
              </button>
              <button
                className="todo-delete-button"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
