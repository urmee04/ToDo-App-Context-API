import { createContext, useState, useEffect } from "react";

// Create a context for theme data and toggling function
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // Initialize theme state from localStorage or default to light
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme || "light";
  });

  //apply the theme to html tag and save to localStorage
  useEffect(() => {
    const root = document.documentElement; //html element
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  //Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
