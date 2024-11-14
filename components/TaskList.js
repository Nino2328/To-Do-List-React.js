import React from 'react';

const TaskItem = ({ task, onEdit, onDelete }) => {
  const priorityClass = {
    Low: 'priority-low',
    Medium: 'priority-medium',
    High: 'priority-high',
  };

  const statusIcon = {
    'To Do': '○',
    'In Progress': '◐',
    'Done': '●',
  };

  return (
    <div className="task-item">
      <div className="task-info">
        <div className="task-name">{task.name}</div>
        <div className="task-details">
          <span className={`priority ${priorityClass[task.priority]}`}>{task.priority}</span>
          <span className="status">{task.status}</span>
          <span className="status-icon">{statusIcon[task.status]}</span>
        </div>
      </div>
      <div className="task-actions">
        <button onClick={() => onEdit(task)} className="edit-btn">✎</button>
        <button onClick={() => onDelete(task.id)} className="delete-btn">🗑</button>
      </div>
    </div>
  );
};

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TaskList;