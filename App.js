import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

const initialTasks = [
  { id: 1, name: 'Go to gym', priority: 'High', status: 'To Do' },
  { id: 2, name: 'Read a book', priority: 'Low', status: 'Done' },
  { id: 3, name: 'Go to market', priority: 'Medium', status: 'In Progress' },
  { id: 4, name: 'Restart Learning Solidworks', priority: 'High', status: 'To Do' },
  { id: 5, name: 'change slider to scroll', priority: 'High', status: 'Done' },
  { id: 6, name: 'To publish the article', priority: 'Medium', status: 'In Progress' },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [showForm, setShowForm] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
    setShowForm(false);
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
    setShowForm(false);
    setTaskToEdit(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const openEditForm = (task) => {
    setTaskToEdit(task);
    setShowForm(true);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Task List</h1>
        <button onClick={() => setShowForm(true)} className="add-task-btn">
          + Add Task
        </button>
      </div>
      <TaskList tasks={tasks} onEdit={openEditForm} onDelete={deleteTask} />
      {showForm && (
        <TaskForm
          onSubmit={taskToEdit ? editTask : addTask}
          onClose={() => {
            setShowForm(false);
            setTaskToEdit(null);
          }}
          task={taskToEdit}
        />
      )}
    </div>
  );
}

export default App;