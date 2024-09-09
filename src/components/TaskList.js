import React from 'react';
import { connect } from 'react-redux';
import { deleteTask, editTask } from '../redux/taskActions';

const TaskList = ({ tasks, deleteTask, editTask }) => {
  return (
    <div>
      {tasks.map(task => (
        <div key={task.id}>
          <h3>{task.name}</h3>
          <button onClick={() => editTask({ ...task, name: 'Updated Task' })}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks.tasks,
});

const mapDispatchToProps = {
  deleteTask,
  editTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
