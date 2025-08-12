import React, { useContext } from "react";
import { TodoContext } from "./contexts/TodoContext";

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
    <form onSubmit={handleSubmit}>
      {" "}
      <input
        type="text"
        value={text} // bind input value to local state
        onChange={(e) => setText(e.target.value)} //update state when user types
        placeholder="Add new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoInput;
