import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoItem = ({ todo }) => {
  //get functions from context to modify todos
  const { toggleTodo, deleteTodo, editTodo } = useContext(TodoContext);

  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  //toggle completed status of the todo
  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  //delete the todo item
  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  //start editing
  const handleStartEdit = () => {
    setNewText(todo.text);
    setIsEditing(true);
  };

  //save edited text
  const handleSaveEdit = () => {
    if (newText && newText.trim() !== "") {
      editTodo(todo.id, newText.trim());
    }
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between bg-white shadow-sm rounded-md px-4 py-2 mb-2 border border-gray-200">
      {/* checkbox toggles completion */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
        className="appearance-none w-5 h-5 border-2 border-gray-400 rounded-full checked:bg-green-500 checked:border-blue-500"
      />

      {/* Todo text with line-through if completed */}
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="flex-1 mx-3 text-gray-800 border border-gray-300 p-2"
        />
      ) : (
        <span
          className={`flex-1 mx-3 text-gray-800 ${
            todo.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {todo.text}
        </span>
      )}

      {/* Delete button */}
      <button
        onClick={handleDelete}
        className="text-red-500 hover:text-red-700 ml-2"
      >
        🗑️
      </button>

      {/* Edit button/save button */}
      {isEditing ? (
        <button
          onClick={handleSaveEdit}
          className="text-green-500 hover:text-green-700 ml-2"
        >
          💾
        </button>
      ) : (
        <button
          onClick={handleStartEdit}
          className="text-yellow-500 hover:text-yellow-700 ml-2"
        >
          ✏️
        </button>
      )}
    </li>
  );
};

export default TodoItem;
