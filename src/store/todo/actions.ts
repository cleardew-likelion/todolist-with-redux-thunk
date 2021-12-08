import { Dispatch } from "redux";
import { requestTodos } from "./api";
import { TodoDispatchTypes } from "./types";

export const LOAD_TODOS_SUCCESSED = "todo/LOAD_TODOS_SUCCESSED";
export const LOAD_TODOS_FAILED = "todo/LOAD_TODOS_FAILED";
export const ADD_TODO = "todo/ADD_TODO";
export const REMOVE_TODO = "todo/REMOVE_TODO";

export const fetchTodos =
  () => async (dispatch: Dispatch<TodoDispatchTypes>) => {
    try {
      const res = await requestTodos();
      dispatch({
        type: LOAD_TODOS_SUCCESSED,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: LOAD_TODOS_FAILED,
      });
    }
  };
