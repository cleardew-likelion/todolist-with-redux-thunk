import { useTodo } from "../../utils/TodoService";
import TodoTemplate from "./TodoTemplate";
import TodoHead from "./TodoHead";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";
import TodoFooter from "./TodoFooter";

const TodoContainer = () => {
  const { todos, nextId, incrementNextId, toggleTodo, removeTodo, createTodo } =
    useTodo();

  return (
    <>
      <TodoTemplate>
        <TodoHead />
        <TodoCreate
          nextId={nextId}
          createTodo={createTodo}
          incrementNextId={incrementNextId}
        />
        <TodoList
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          todos={todos}
        />
        <TodoFooter todos={todos} />
      </TodoTemplate>
    </>
  );
};

export default TodoContainer;
