import React, { useContext } from "react";
//import ThemeContext to access theme state and toggle function
import { ThemeContext } from "./contexts/ThemeContext";

const ThemeToggleButton = () => {
  //destructure theme and toggleTheme function from ThemeContext
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    //Button triggers toggleTheme to switch between light and dark themes
    <button onClick={toggleTheme}>
      {/* Display text based on current theme */}
      {theme === "light" ? "Switch to Dark" : "Switch to Light"}
    </button>
  );
};

export default ThemeToggleButton;
