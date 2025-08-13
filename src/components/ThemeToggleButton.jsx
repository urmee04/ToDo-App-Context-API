import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-gray-800 text-white 
                 dark:bg-yellow-400 dark:text-black transition"
    >
      {theme === "light" ? "🌙 Switch to Dark" : "☀ Switch to Light"}
    </button>
  );
};

export default ThemeToggleButton;
