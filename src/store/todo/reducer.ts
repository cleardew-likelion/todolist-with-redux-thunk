import {
  LOAD_TODOS_SUCCESSED,
  LOAD_TODOS_FAILED,
  ADD_TODO,
  REMOVE_TODO,
} from "./actions";
import { ITodo, TodoDispatchTypes } from "./types";

interface IDefaultState {
  todos: ITodo[];
}

const defaultState: IDefaultState = {
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
  }
};

export default todoReducer;
