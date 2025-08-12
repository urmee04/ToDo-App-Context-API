import { createContext, useState, useEffect } from "react";

//create a new context for todos
const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  //initialize todos state from localStorage if available, otherwise use an empty array
  const [todos, setTodos] = useState(() => {
    //get stored todos from localStorage
    const storedTodos = localStorage.getItem("todos");
    //parse JSON if found, else empty array
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  // Automatically update localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); // Save todos to localStorage
  }, [todos]); // Runs whenever todos array changes

  // Add a new todo item
  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false }; // Create new todo object
    setTodos((prevTodos) => [...prevTodos, newTodo]); // Append to existing todos
  };

  // Toggle completion status of a todo
  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        //flip completed flag if id matches
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  //delete a todo by id
  const deleteTodo = (id) => {
    //remove todo from array
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  //edit the text of an existing todo
  const editTodo = (id, newText) => {
    setTodos((prevTodos) =>
      prevTodos.map(
        //replace text if id matches
        (todo) => (todo.id === id ? { ...todo, text: newText } : todo)
      )
    );
  };

  // Remove all completed todos
  const clearCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed)); // Keep only uncompleted todos
  };

  //provide todos and related actions to children components
  return (
    <TodoContext.Provider
      value={{
        todos, // List of todos
        addTodo, // Function to add a todo
        toggleTodo, // Function to toggle completion
        deleteTodo, // Function to delete a todo
        editTodo, // Function to edit a todo
        clearCompleted, // Function to remove completed todos
      }}
    >
      {children} {/* Render children components inside provider */}
    </TodoContext.Provider>
  );
};

//export provider and context to be used in other components
export { TodoProvider, TodoContext };
