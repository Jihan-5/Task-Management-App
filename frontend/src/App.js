import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Dashboard from './components/DashBoard';
import './styles/App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Add or remove dark-mode class from the body element
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="container mt-4">
        <Dashboard tasks={[]} /> {/* Pass tasks from Redux state */}
        <TaskForm />
        <TaskList />
      </div>
      <Footer />
    </div>
  );
};

export default App;