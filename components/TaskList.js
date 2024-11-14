// src/components/TaskList.js
import React from 'react';
import { ListGroup, Button, Badge } from 'react-bootstrap';

export default function TaskList({ tasks, updateTask, deleteTask, toggleStatus }) {
  const getPriorityVariant = (priority) => {
    switch (priority) {
      case 'High': return 'danger';
      case 'Medium': return 'warning';
      case 'Low': return 'success';
      default: return 'secondary';
    }
  };

  const getStatusVariant = (status) => {
    switch (status) {
      case 'Done': return 'success';
      case 'In Progress': return 'warning';
      case 'To Do': return 'secondary';
      default: return 'secondary';
    }
  };

  return (
    <ListGroup>
      {tasks.map((task) => (
        <ListGroup.Item
          key={task.id}
          className="d-flex justify-content-between align-items-center"
        >
          <div className="d-flex align-items-center">
            <Button
              variant={task.status === 'Done' ? 'success' : 'outline-secondary'}
              size="sm"
              className="me-2 rounded-circle"
              style={{ width: '30px', height: '30px' }}
              onClick={() => toggleStatus(task.id)}
            >
              {task.status === 'Done' && '✓'}
            </Button>
            <span className={task.status === 'Done' ? 'text-muted text-decoration-line-through' : ''}>
              {task.name}
            </span>
          </div>
          <div>
            <Badge bg={getPriorityVariant(task.priority)} className="me-2">
              {task.priority}
            </Badge>
            <Badge bg={getStatusVariant(task.status)} className="me-2">
              {task.status}
            </Badge>
            <Button
              variant="outline-secondary"
              size="sm"
              className="me-2"
              onClick={() => {
                const newName = prompt('Enter new task name:', task.name);
                if (newName) updateTask(task.id, { name: newName });
              }}
            >
              Edit
            </Button>
            <Button
              variant="outline-danger"
              size="sm"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}