import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTaskStatus } from '../redux/taskSlice';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterPriority, setFilterPriority] = useState('All');
  const [filterCategory, setFilterCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage] = useState(9); // 3 tasks per row * 3 rows
  const [darkMode, setDarkMode] = useState(false);

  // Filter tasks based on status, priority, category, and search query
  const filteredTasks = tasks.filter((task) => {
    return (
      (filterStatus === 'All' || task.status === filterStatus) &&
      (filterPriority === 'All' || task.priority === filterPriority) &&
      (filterCategory === 'All' || task.category === filterCategory) &&
      (
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  });

  // Pagination logic
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <h2 className="text-center mb-4">Task List</h2>
      {/* Dark mode toggle */}
      <button
        className="btn btn-secondary mb-3"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      {/* Search bar */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {/* Filter controls */}
      <div className="mb-3">
        <select
          className="form-select mb-2"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        <select
          className="form-select mb-2"
          value={filterPriority}
          onChange={(e) => setFilterPriority(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <select
          className="form-select mb-2"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Shopping">Shopping</option>
        </select>
      </div>
      {/* Task grid */}
      <div className="row">
        {currentTasks.map((task) => (
          <div key={task.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{task.title}</h3>
                <p className="card-text">{task.description}</p>
                <p>Priority: {task.priority}</p>
                <p>Category: {task.category}</p>
                <p>Status: {task.status}</p>
                <button
                  className="btn btn-success me-2"
                  onClick={() => dispatch(toggleTaskStatus(task.id))}
                >
                  {task.status === 'Pending' ? 'Mark Complete' : 'Mark Pending'}
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(deleteTask(task.id))}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="mt-3">
        {Array.from({ length: Math.ceil(filteredTasks.length / tasksPerPage) }, (_, i) => (
          <button
            key={i + 1}
            className="btn btn-primary me-2"
            onClick={() => paginate(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TaskList;