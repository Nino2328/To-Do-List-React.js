import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("High");
  const [status, setStatus] = useState("To Do");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

  const addTask = () => {
    if (newTask.trim() !== "") {
      const task = { text: newTask, priority, status };
      setTasks([...tasks, task]);
      setNewTask("");
      setPriority("High");
      setStatus("To Do");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    const task = tasks[index];
    setNewTask(task.text);
    setPriority(task.priority);
    setStatus(task.status);
    setIsEditing(true);
    setCurrentTaskIndex(index);
  };

  const updateTask = () => {
    const updatedTasks = tasks.map((task, index) =>
      index === currentTaskIndex ? { ...task, text: newTask, priority, status } : task
    );
    setTasks(updatedTasks);
    setIsEditing(false);
    setNewTask("");
    setPriority("High");
    setStatus("To Do");
  };

  return (
    <div className="App">
      <h1>Task List</h1>
      <div className="task-input">
        <input
          type="text"
          placeholder="Add task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Low">Low</option>
        </select>
        <button onClick={isEditing ? updateTask : addTask}>
          {isEditing ? "Update Task" : "Add Task"}
        </button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task">
            <div>
              <h3>{task.text}</h3>
              <p className={task.priority === "High" ? "priority-high" : "priority-low"}>
                Priority: {task.priority}
              </p>
              <select
                value={task.status}
                onChange={(e) => {
                  const updatedTasks = [...tasks];
                  updatedTasks[index].status = e.target.value;
                  setTasks(updatedTasks);
                }}
              >
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </select>
            </div>
            <div className="task-actions">
              <button onClick={() => editTask(index)} className="edit-button">Edit</button>
              <button onClick={() => deleteTask(index)} className="delete-button">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
