import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaMoon, FaSun } from 'react-icons/fa'; // Icons for dark/light mode

const App = () => {
  const [tasks, setTasks] = useState([]); // State for tasks
  const [taskToEdit, setTaskToEdit] = useState(null); // State for task being edited
  const [darkMode, setDarkMode] = useState(false); // State for dark mode

  // Function to add or update a task
  const handleAddOrUpdateTask = (task) => {
    if (taskToEdit) {
      // Update existing task
      setTasks(tasks.map((t) => (t.id === taskToEdit.id ? task : t)));
      setTaskToEdit(null); // Clear edit mode
    } else {
      // Add new task
      setTasks([...tasks, { ...task, id: Date.now(), status: 'Pending' }]);
    }
  };

  // Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Function to toggle task status
  const toggleTaskStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, status: task.status === 'Pending' ? 'Completed' : 'Pending' }
          : task
      )
    );
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode class to the body element
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className="container mt-5">
      <div className="text-center mb-2">
        <h1>Task Management App</h1>
      </div>
      <div className="d-flex justify-content-end mb-4">
        <button onClick={toggleDarkMode} className="btn btn-link">
          {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
        </button>
      </div>
      <TaskForm
        taskToEdit={taskToEdit}
        setTaskToEdit={setTaskToEdit}
        handleAddOrUpdateTask={handleAddOrUpdateTask}
      />
      <TaskList
        tasks={tasks} // Pass tasks state
        setTaskToEdit={setTaskToEdit}
        deleteTask={deleteTask}
        toggleTaskStatus={toggleTaskStatus}
      />
    </div>
  );
};

export default App;