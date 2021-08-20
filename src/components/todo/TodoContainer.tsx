import { useTodo } from "../../utils/TodoService";
import TodoTemplate from "./TodoTemplate";
import TodoHead from "./TodoHead";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";
import TodoFooter from "./TodoFooter";

interface TodoContainerProps {
  setIsLocked: (props: any) => void;
}

const TodoContainer = ({ setIsLocked }: TodoContainerProps) => {
  const { todos, nextId, incrementNextId, toggleTodo, removeTodo, createTodo } =
    useTodo();

  return (
    <>
      <TodoTemplate>
        <TodoHead setIsLocked={setIsLocked} />
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
