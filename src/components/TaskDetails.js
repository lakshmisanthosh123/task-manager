
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const TaskDetails = () => {
  const { id } = useParams();
  const task = useSelector((state) =>
    state.tasks.tasks.find((task) => task.id === parseInt(id))
  );

  if (!task) {
    return <h2>Task not found</h2>;
  }

  return (
    <div>
      <h2>{task.name}</h2>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
    </div>
  );
};

export default TaskDetails;
