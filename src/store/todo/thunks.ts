import { Dispatch } from "redux";
import { AsyncActionCreatorBuilder } from "typesafe-actions";
import { fetchTodos } from "./actions";
import { requestTodos } from "./api";

// export const fetchTodos =
//   () => async (dispatch: Dispatch<TodoDispatchTypes>) => {
//     try {
//       const res = await requestTodos();
//       dispatch({
//         type: LOAD_TODOS_SUCCESSED,
//         payload: res.data,
//       });
//     } catch (e) {
//       dispatch({
//         type: LOAD_TODOS_FAILED,
//       });
//     }
//   };

export const fetchTodosThunk = () => {
  return function thunk() {
    return async (dispatch: Dispatch) => {
      const { request, success, failure } = fetchTodos;
      dispatch(request(undefined));
      try {
        const result = await requestTodos();
        dispatch(success(result));
      } catch (e) {
        // dispatch(failure(e));
      }
    };
  };
};
