import { createReducer } from "typesafe-actions";
import {
  LOAD_TODOS_SUCCESSED,
  LOAD_TODOS_FAILED,
  ADD_TODO,
  REMOVE_TODO,
  fetchTodos,
} from "./actions";
import { ITodo, TodoDispatchTypes } from "./types";

createReducer;

export const todoList = createReducer([]).handleAction(
  fetchTodos.success,
  (state, action) => action.payload
);

interface IDefaultState {
  isLoading: boolean;
  todos: ITodo[] | [];
}

const defaultState: IDefaultState = {
  isLoading: true,
  todos: [],
};

const todoReducer = (
  state: IDefaultState = defaultState,
  actions: TodoDispatchTypes
) => {
  switch (actions.type) {
    case LOAD_TODOS_SUCCESSED:
      return { ...state, todos: actions.payload };
    case LOAD_TODOS_FAILED:
      return state;
    case ADD_TODO:
      return state;
    case REMOVE_TODO:
      return state;
    default:
      return state;
  }
};

export default todoReducer;
