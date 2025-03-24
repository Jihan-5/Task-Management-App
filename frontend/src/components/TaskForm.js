import React, { useState, useEffect } from 'react';

const TaskForm = ({ taskToEdit, setTaskToEdit, handleAddOrUpdateTask, darkMode }) => {
  // Set default values for title and description
  const [title, setTitle] = useState('Title');
  const [description, setDescription] = useState('Description');
  const [priority, setPriority] = useState('Medium');
  const [category, setCategory] = useState('Personal');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setPriority(taskToEdit.priority);
      setCategory(taskToEdit.category);
    } else {
      // Reset to defaults when not editing
      setTitle('Title');
      setDescription('Description');
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Only submit if user has modified the defaults
    if (title.trim() === 'Title') return;
    if (description.trim() === 'Description') return;
    
    handleAddOrUpdateTask({ title, description, priority, category });
    setTitle('Title');
    setDescription('Description');
    setPriority('Medium');
    setCategory('Personal');
  };

  // Clear default text when user focuses on input
  const handleFocus = (field) => {
    if (field === 'title' && title === 'Title') {
      setTitle('');
    } else if (field === 'description' && description === 'Description') {
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`mb-4 p-3 rounded ${darkMode ? 'bg-dark' : 'bg-light'}`}>
      <div className="mb-3">
        <input
          type="text"
          className={`form-control ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onFocus={() => handleFocus('title')}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className={`form-control ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onFocus={() => handleFocus('description')}
          required
        />
      </div>
      <div className="row g-3">
        <div className="col-md-6">
          <select
            className={`form-select ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Low">Low Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="High">High Priority</option>
          </select>
        </div>
        <div className="col-md-6">
          <select
            className={`form-select ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Personal">Personal</option>
            <option value="Business">Business</option>
            <option value="Shopping">Shopping</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      <button type="submit" className={`btn mt-3 ${darkMode ? 'btn-primary' : 'btn-primary'}`}>
        {taskToEdit ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;