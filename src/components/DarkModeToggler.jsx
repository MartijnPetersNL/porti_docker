import React from "react";
import { useDarkMode } from "../context/ThemeContext.jsx";

const DarkModeToggler = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log("Button is clicked");
  };

  return (
    <button
      className="px-6 py-2 bg-gray-200 rounded-md transition-all dark:bg-white/20 mb-3"
      onClick={toggleDarkMode}
    >
      {darkMode ? " ☀ Light mode " : " 🌑 Dark mode"}
    </button>
  );
};

export default DarkModeToggler;
