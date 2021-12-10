import { useTodo } from "../../utils/TodoService";
import TodoTemplate from "./TodoTemplate";
import TodoHead from "./TodoHead";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";
import TodoFooter from "./TodoFooter";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store";
import { ITodo } from "../../store/todo/types";
import { fetchTodos } from "../../store/todo/actions";
import { useEffect } from "react";
import { fetchTodosThunk } from "../../store/todo/thunks";

const TodoContainer = () => {
  const { nextId, incrementNextId, toggleTodo, removeTodo, createTodo } =
    useTodo();

  const dispatch = useDispatch();
  const todoState = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchTodosThunk());
  }, [dispatch]);

  console.log("#", todoState);

  const todos: any[] = [];

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
