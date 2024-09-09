// src/components/Task.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTask, moveTask } from '../redux/taskActions';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleMove = (newPriority) => {
    dispatch(moveTask({ id: task.id, newPriority }));
  };

  return (
    <div className={`task task-${task.priority}`}>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <Link to={`/tasks/${task.id}`}>View Details</Link>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => handleMove('high')}>Move to High</button>
      <button onClick={() => handleMove('low')}>Move to Low</button>
    </div>
  );
};

export default Task;
