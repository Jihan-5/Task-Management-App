import React, { useState } from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks = [], setTaskToEdit, deleteTask, toggleTaskStatus }) => {
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterPriority, setFilterPriority] = useState('All');
  const [filterCategory, setFilterCategory] = useState('All');

  // Filter tasks based on status, priority, and category
  const filteredTasks = tasks.filter((task) => {
    return (
      (filterStatus === 'All' || task.status === filterStatus) &&
      (filterPriority === 'All' || task.priority === filterPriority) &&
      (filterCategory === 'All' || task.category === filterCategory)
    );
  });

  return (
    <div className="task-list-container">
      <h2 className="mb-4">Task List</h2>
      
      {/* Filter Controls */}
      <div className="row mb-4">
        <div className="col-md-4">
          <label className="form-label">Filter by Status:</label>
          <select
            className="form-select"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        
        <div className="col-md-4">
          <label className="form-label">Filter by Priority:</label>
          <select
            className="form-select"
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        
        <div className="col-md-4">
          <label className="form-label">Filter by Category:</label>
          <select
            className="form-select"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Personal">Personal</option>
            <option value="Business">Business</option>
            <option value="Shopping">Shopping</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* Task Grid */}
      {filteredTasks.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {filteredTasks.map((task) => (
            <div key={task.id} className="col">
              <TaskItem
                task={task}
                deleteTask={deleteTask}
                toggleTaskStatus={toggleTaskStatus}
                setTaskToEdit={setTaskToEdit}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="alert alert-info">No tasks found. Add a new task!</div>
      )}
    </div>
  );
};

export default TaskList;