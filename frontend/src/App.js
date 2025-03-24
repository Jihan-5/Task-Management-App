import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaMoon, FaSun } from 'react-icons/fa';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode to body and container
  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
    document.body.style.backgroundColor = darkMode ? '#121212' : '#ffffff';
    document.body.style.color = darkMode ? '#ffffff' : '#000000';
  }, [darkMode]);

  const handleAddOrUpdateTask = (task) => {
    if (taskToEdit) {
      setTasks(tasks.map(t => t.id === taskToEdit.id ? task : t));
      setTaskToEdit(null);
    } else {
      setTasks([...tasks, { ...task, id: Date.now(), status: 'Pending' }]);
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTaskStatus = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, status: task.status === 'Pending' ? 'Completed' : 'Pending' } : task
    ));
  };

  return (
    <div className={`container mt-5 ${darkMode ? 'bg-dark' : ''}`}>
      {/* Centered Header */}
      <div className="text-center mb-4">
        <h1 className={darkMode ? 'text-light' : ''}>Task Management App</h1>
        <p className={`fst-italic ${darkMode ? 'text-light' : 'text-muted'}`}>
          Program and Plan
        </p>
      </div>

      {/* Dark Mode Toggle - Positioned absolutely */}
      <button 
        onClick={() => setDarkMode(!darkMode)} 
        className="btn btn-link position-absolute top-0 end-0 mt-3 me-3"
      >
        {darkMode ? <FaSun size={24} className="text-warning" /> : <FaMoon size={24} />}
      </button>
      
      <TaskForm 
        taskToEdit={taskToEdit}
        setTaskToEdit={setTaskToEdit}
        handleAddOrUpdateTask={handleAddOrUpdateTask}
        darkMode={darkMode}
      />
      
      <TaskList
        tasks={tasks}
        setTaskToEdit={setTaskToEdit}
        deleteTask={deleteTask}
        toggleTaskStatus={toggleTaskStatus}
        darkMode={darkMode}
      />
    </div>
  );
};

export default App;