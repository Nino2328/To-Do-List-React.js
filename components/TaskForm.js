// src/components/TaskForm.js
import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

export default function TaskForm({ addTask }) {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask({ name: task, priority });
      setTask('');
      setPriority('Medium');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Row>
        <Col xs={12} md={6} className="mb-2 mb-md-0">
          <Form.Control
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="New task"
          />
        </Col>
        <Col xs={6} md={3}>
          <Form.Select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </Form.Select>
        </Col>
        <Col xs={6} md={3}>
          <Button type="submit" variant="primary" className="w-100">
            Add Task
          </Button>
        </Col>
      </Row>
    </Form>
  );
}