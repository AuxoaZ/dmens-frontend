import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className=" text-gray-800  dark:text-gray-400"
    >
      {theme === 'dark' ? <Sun/> : <Moon/>}
    </button>
  );
};

export default DarkMode;
