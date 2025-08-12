import { useContext } from "react";
import { TodoContext } from "./contexts/TodoContext";

const TodoItem = ({ todo }) => {
  //get functions from context to modify todos
  const { toggleTodo, deleteTodo, editTodo } = useContext(TodoContext);

  //toggle completed status of the todo
  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  //delete the todo item
  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  //edit the todo text, newText from prompt input
  const handleEdit = (newText) => {
    //only call edit if newText is not null or empty
    if (newText && newText.trim() !== "") {
      editTodo(todo.id, newText.trim());
    }
  };

  return (
    <li>
      {/* checkbox toggles completion */}
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />

      {/* Todo text with line-through if completed */}
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>

      {/* Delete button */}
      <button onClick={handleDelete}>Delete</button>

      {/* Edit button triggers prompt to edit text */}
      <button onClick={() => handleEdit(prompt("Enter new text"))}>Edit</button>
    </li>
  );
};

export default TodoItem;
