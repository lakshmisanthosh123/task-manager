// src/components/AdminDashboard.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { deleteTask, editTask } from '../redux/taskActions';
import TaskChart from './TaskChart';

const AdminDashboard = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleEdit = (taskId, updatedTask) => {
    dispatch(editTask(updatedTask));
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      {/* Task Chart */}
      <TaskChart />

      <h3>Manage Tasks</h3>
      <div className="task-list">
        {tasks.map((task) => (
          <div key={task.id}>
            <Task task={task} />
            <button onClick={() => handleDelete(task.id)}>Delete</button>
            <button onClick={() => handleEdit(task.id, { ...task, name: 'Updated Task Name' })}>
              Edit Task
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
