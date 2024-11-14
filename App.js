import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now(), status: 'To Do' }]);
  };

  const updateTask = (id, updates) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, ...updates } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleStatus = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        const statusOrder = ['To Do', 'In Progress', 'Done'];
        const nextStatusIndex = (statusOrder.indexOf(task.status) + 1) % 3;
        return { ...task, status: statusOrder[nextStatusIndex] };
      }
      return task;
    }));
  };

  return (
    <Container className="mt-5">
      <h1 className="mb-4">Task List</h1>
      <TaskForm addTask={addTask} />
      <TaskList 
        tasks={tasks} 
        updateTask={updateTask} 
        deleteTask={deleteTask} 
        toggleStatus={toggleStatus}
      />
    </Container>
  );
}

export default App;