import { useEffect, useState } from "react";
import "../../styles/dark-mode.css";

const THEME_STORAGE_KEY = "creator-dashboard-theme";

function getInitialTheme() {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

  if (savedTheme === "dark") {
    return true;
  }

  if (savedTheme === "light") {
    return false;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    const selectedTheme = isDarkMode ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", selectedTheme);
    localStorage.setItem(THEME_STORAGE_KEY, selectedTheme);
  }, [isDarkMode]);

  function handleThemeToggle() {
    setIsDarkMode((currentMode) => !currentMode);
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={handleThemeToggle}
      aria-label={
        isDarkMode ? "Switch to light mode" : "Switch to dark mode"
      }
      aria-pressed={isDarkMode}
      title={
        isDarkMode ? "Switch to light mode" : "Switch to dark mode"
      }
    >
      <span className="theme-toggle-icon" aria-hidden="true">
        {isDarkMode ? "☀️" : "🌙"}
      </span>

      <span className="theme-toggle-label">
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </span>
    </button>
  );
}

export default ThemeToggle;
