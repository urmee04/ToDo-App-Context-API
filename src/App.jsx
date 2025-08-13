//Import context providers for different app states
import { TodoProvider } from "./contexts/TodoContext";
import { FilterProvider } from "./contexts/FilterContext";
import { ThemeProvider } from "./contexts/ThemeContext";
//Import UI components
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButton";
import ThemeToggleButton from "./components/ThemeToggleButton";

import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <FilterProvider>
        <TodoProvider>
          <div className="app-container bg-gray-100 dark:bg-gray-900 h-screen/2 p-4 flex flex-col mx-auto ring-1 ring-gray-300 mt-10">
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Todo App (Context API)
            </h1>
            <ThemeToggleButton />
            <div className="flex flex-col gap-4">
              <TodoInput />
              <div className="flex justify-center">
                <FilterButtons />
              </div>
              <TodoList />
            </div>
          </div>
        </TodoProvider>
      </FilterProvider>
    </ThemeProvider>
  );
}

export default App;
