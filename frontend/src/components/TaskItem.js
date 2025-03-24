import React from 'react';

const TaskItem = ({ task, deleteTask, toggleTaskStatus, setTaskToEdit, darkMode }) => {
  const getPriorityColor = () => {
    switch(task.priority) {
      case 'High': return 'danger';
      case 'Medium': return 'warning';
      case 'Low': return 'success';
      default: return 'primary';
    }
  };

  return (
    <div className={`card h-100 ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}>
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h5 className="card-title mb-0">{task.title}</h5>
          <span className={`badge bg-${getPriorityColor()}`}>
            {task.priority}
          </span>
        </div>
        
        <p className="card-text flex-grow-1">{task.description}</p>
        
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className={`badge ${task.status === 'Pending' ? 'bg-warning' : 'bg-success'}`}>
            {task.status}
          </span>
          <small className={darkMode ? 'text-light' : 'text-muted'}>
            {task.category}
          </small>
        </div>
        
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            className={`btn btn-sm ${darkMode ? 'btn-outline-light' : 'btn-outline-success'}`}
            onClick={() => toggleTaskStatus(task.id)}
          >
            {task.status === 'Pending' ? '✓ Complete' : '↩ Pending'}
          </button>
          <button
            className={`btn btn-sm ${darkMode ? 'btn-outline-info' : 'btn-outline-primary'}`}
            onClick={() => setTaskToEdit(task)}
          >
            Edit
          </button>
          <button 
            className={`btn btn-sm ${darkMode ? 'btn-outline-danger' : 'btn-outline-danger'}`}
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;