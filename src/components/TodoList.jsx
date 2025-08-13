import { useContext } from "react";
//import the TodoContext to access the list of todos
import { TodoContext } from "../contexts/TodoContext";
//import the FilterContext to access the current filter state
import { FilterContext } from "../contexts/FilterContext";
//import TodoItem component to render each todo item
import TodoItem from "./TodoItem";

const TodoList = () => {
  //extract todos array from TodoContext
  const { todos, clearCompleted } = useContext(TodoContext);
  // Extract filter value from FilterContext
  const { filter } = useContext(FilterContext);

  // Filter todos based on current filter selection
  const filteredTodos = todos.filter((todo) => {
    //show all todos
    if (filter === "all") return true;
    //show only active but not completed todos
    if (filter === "active") return !todo.completed;
    //show only completed todos
    if (filter === "completed") return todo.completed;
  });

  //Count uncompleted todos
  const itemsLeft = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-md">
      {filteredTodos.length === 0 ? (
        <p className="text-gray-500 text-center italic">
          No todos yet! Add one above.
        </p>
      ) : (
        <>
          <ul className="mb-4">
            {/* Map over filtered todos and render a TodoItem for each */}
            {filteredTodos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </ul>

          {/* Footer with count and clear button */}
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>
              {itemsLeft} item{itemsLeft !== 1 ? "s" : ""} left
            </span>

            {/* Only show "Clear Completed" if there are completed todos */}
            {todos.some((todo) => todo.completed) && (
              <button
                onClick={clearCompleted}
                className="text-blue-500 hover:text-blue-700 transition-colors"
              >
                Clear Completed ({todos.filter((t) => t.completed).length})
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default TodoList;
