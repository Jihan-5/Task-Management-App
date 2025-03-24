import React, { useState } from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks = [], setTaskToEdit, deleteTask, toggleTaskStatus, darkMode }) => {
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterPriority, setFilterPriority] = useState('All');
  const [filterCategory, setFilterCategory] = useState('All');

  const filteredTasks = tasks.filter((task) => {
    return (
      (filterStatus === 'All' || task.status === filterStatus) &&
      (filterPriority === 'All' || task.priority === filterPriority) &&
      (filterCategory === 'All' || task.category === filterCategory)
    );
  });

  return (
    <div className={`task-grid-container ${darkMode ? 'bg-dark' : ''}`}>
      <h2 className={`mb-4 ${darkMode ? 'text-light' : ''}`}>Task List</h2>
      
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <select
            className={`form-select ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div className="col-md-4">
          <select
            className={`form-select ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value)}
          >
            <option value="All">All Priorities</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="col-md-4">
          <select
            className={`form-select ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Personal">Personal</option>
            <option value="Business">Business</option>
            <option value="Shopping">Shopping</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {filteredTasks.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {filteredTasks.map((task) => (
            <div key={task.id} className="col">
              <TaskItem
                task={task}
                deleteTask={deleteTask}
                toggleTaskStatus={toggleTaskStatus}
                setTaskToEdit={setTaskToEdit}
                darkMode={darkMode}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className={`alert ${darkMode ? 'alert-dark' : 'alert-info'}`}>
          No tasks found. Add a new task!
        </div>
      )}
    </div>
  );
};

export default TaskList;