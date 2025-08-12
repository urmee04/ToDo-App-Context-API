import { useContext } from "react";
//import the TodoContext to access the list of todos
import { TodoContext } from "./contexts/TodoContext";
//import the FilterContext to access the current filter state
import { FilterContext } from "./contexts/FilterContext";
//import TodoItem component to render each todo item
import TodoItem from "./TodoItem";

const TodoList = () => {
  //extract todos array from TodoContext
  const { todos } = useContext(TodoContext);
  // Extract filter value from FilterContext
  const { filter } = useContext(FilterContext);

  // Filter todos based on current filter selection
  const filteredTodos = todos.filter((todo) => {
    //show all todos
    if (filter === "All") return true;
    //show only active but not completed todos
    if (filter === "Active") return !todo.completed;
    //show only completed todos
    if (filter === "Completed") return todo.completed;
  });

  return (
    <ul>
      {/* Map over filtered todos and render a TodoItem for each */}
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
