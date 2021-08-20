import React from "react";
import TodoListItem from "./TodoListItem";

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
