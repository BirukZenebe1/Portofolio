import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react'; // Optional: lucide icons

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('theme') === 'dark' || false
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-6 right-6 z-50 bg-gray-100 dark:bg-gray-800 p-2 rounded-full shadow-md transition duration-300"
      aria-label="Toggle Theme"
    >
      {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-800" />}
    </button>
  );
};

export default ThemeToggle;
