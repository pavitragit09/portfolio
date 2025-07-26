import React from 'react';
import './ToggleDarkMode.css';

const ToggleDarkMode = ({ darkMode, setDarkMode }) => {
  return (
    <button className="toggle-button" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default ToggleDarkMode;
