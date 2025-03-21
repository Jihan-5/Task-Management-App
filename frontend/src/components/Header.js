import React from 'react';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className={`bg-primary text-white text-center py-3 ${darkMode ? 'dark-mode' : ''}`}>
      <h1>Task Management App</h1>
      <button
        className="btn btn-secondary"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};

export default Header;