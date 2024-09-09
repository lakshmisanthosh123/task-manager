// src/components/TaskChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const TaskChart = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  // Count tasks by priority
  const taskCountByPriority = {
    low: tasks.filter(task => task.priority === 'low').length,
    medium: tasks.filter(task => task.priority === 'medium').length,
    high: tasks.filter(task => task.priority === 'high').length,
  };

  const data = {
    labels: ['Low Priority', 'Medium Priority', 'High Priority'],
    datasets: [
      {
        label: '# of Tasks',
        data: [taskCountByPriority.low, taskCountByPriority.medium, taskCountByPriority.high],
        backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
        borderColor: ['#36A2EB', '#FFCE56', '#FF6384'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `Tasks: ${tooltipItem.raw}`,
        },
      },
    },
  };

  return (
    <div className="task-chart">
      <h3>Task Distribution by Priority</h3>
      <Pie data={data} options={options} />
    </div>
  );
};

export default TaskChart;
