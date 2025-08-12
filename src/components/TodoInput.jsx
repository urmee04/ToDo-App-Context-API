import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoInput = () => {
  //destructure addTodo function from TodoContext using useContext
  const { addTodo } = useContext(TodoContext);

  //local state to store the input value for the new todo
  const [text, setText] = React.useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); //Prevent default form submit behavior,page reload

    //prevent adding empty or whitespace, only todos
    if (!text.trim()) return;

    addTodo(text); //Call context's addTodo function to add a new todo
    setText(""); //Clear the input field after submission
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 mt-4" // form layout
    >
      {" "}
      <input
        type="text"
        value={text} // bind input value to local state
        onChange={(e) => setText(e.target.value)} //update state when user types
        placeholder="What needs to be done?"
        className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-200"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoInput;
