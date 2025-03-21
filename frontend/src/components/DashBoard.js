import React from 'react';

const Dashboard = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.status === 'Completed').length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="dashboard mb-4">
      <h3>Dashboard</h3>
      <p>Total Tasks: {totalTasks}</p>
      <p>Completed Tasks: {completedTasks}</p>
      <p>Pending Tasks: {pendingTasks}</p>
    </div>
  );
};

export default Dashboard;