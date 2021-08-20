/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

export type Itodo = {
  id: number;
  text: string;
  done: boolean;
  due: string;
};

let initialTodos: Itodo[] = [];
let initialNextId: number = 0;

export const useTodo = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [nextId, setNextId] = useState(initialNextId);

  const incrementNextId = () => {
    setNextId((prev: number) => prev + 1);
  };

  const loadTodos = () => {
    let data = localStorage.getItem("todos");
    if (data === undefined) data = "";
    initialTodos = JSON.parse(data!);
    setTodos(initialTodos);
  };

  const saveData = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  useEffect(() => {
    loadTodos();
  }, []);

  useEffect(() => {
    saveData();
  }, [todos]);

  const toggleTodo = (id: number) => {
    const newTodos = todos.map((todo: Itodo) => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const removeTodo = (id: number) => {
    setTodos((prev: Itodo[]) => prev.filter((todo: Itodo) => todo.id !== id));
  };

  const createTodo = (todo: Itodo) => {
    loadTodos();
    setTodos((prev: Itodo[]) =>
      prev.concat({
        ...todo
      })
    );
  };

  return {
    todos,
    nextId,
    incrementNextId,
    toggleTodo,
    removeTodo,
    createTodo
  };
};
